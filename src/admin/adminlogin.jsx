import React from "react";
import Header from "../components/header/header";
import { useState } from "react";
import axios from "axios";

const apiRoot = axios.create({
  baseURL: `http://3.71.77.21:3000/`,
});

const Adminlogin = () => {
  const [error, setError] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const workerToken = localStorage.getItem("Authorization");
  const onSubmit = (e) => {
    e.preventDefault();
    const data = {
      username: username,
      password: password,
      admin_token: workerToken,
    };
    apiRoot
      .post("/v1/login", data)
      .then((response) => {
        console.log(response, "response");
        localStorage.setItem("Authorization", response?.data?.token);
        window.location.href = "http://localhost:5173/dashboard-admin";
      })
      .catch((error) => setError(error?.message));
  };
  return (
    <div>
      <Header />
      <div className="container">
        <form action="" className="form-submit" onSubmit={(e) => onSubmit(e)}>
          <h3>{error}</h3>
          <input
            required
            type="text"
            placeholder="Enter your username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            required
            type="password"
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submmit">Log in</button>
        </form>
      </div>
    </div>
  );
};

export default Adminlogin;
