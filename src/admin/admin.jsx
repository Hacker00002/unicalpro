import React, { useEffect } from "react";
import Header from "../components/header/header";
import { useState } from "react";
import axios from "../config";
//
const Admin = () => {
  // post
  const [name, setName] = useState("");
  const [job, setJob] = useState("");
  const [about, setAbout] = useState("");
  const [phone, setPhone] = useState("");
  const [imgUpload, setImage] = useState("");
  // update
  const [about1, setAbout1] = useState("");
  const [phone1, setPhone1] = useState("");
  const [text, setText] = useState("");
  const [text1, setText1] = useState("");
  const [image_s, setImages] = useState("");
  const [image_f, setImagef] = useState("");

  const onSubmits = (e) => {
    e.preventDefault();
    const data = {
      fullname: name,
      type: job,
      about: about,
      phone_number: phone,
      image_url: imgUpload,
    };
    axios
      .post("v1/doctor", data)
      .then((response) => {
        localStorage.setItem("Authorization", response?.data?.token);
        console.log(response, "response");
      })
      .catch((error) => console.log(error));
  };

  const onUpdate = (e) => {
    e.preventDefault();
    const data = {
      title: about1,
      paragraph: text,
      phone_number: phone1,
      s_image_url: image_s,
      f_image_url: image_f,
      about: text1,
    };
    axios
      .put("v1/aboutus", data)
      .then((response) => {
        localStorage.setItem("Authorization", response?.data?.token);
        console.log(response, "response");
      })
      .catch((error) => console.log(error));
  };

  const onDelete = (e) => {
    axios
      .delete(`/v1/doctor/${e}`)
      .then((response) => response.json())
      .then((response) => {
        localStorage.setItem("Authorization", response?.data?.token);
        setWorker(response?.doctors);
      })
      .catch((error) => console.log(error));
  };

  const [worker, setWorker] = useState([]);
  useEffect(() => {
    const fetchdata = async () => {
      const datas = await fetch("http://3.71.77.21:3000/doctors").then((elem) =>
        elem.json()
      );
      setWorker(datas?.doctors);
    };
    fetchdata();
  }, []);

  const handleSubmit2 = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("file", event.target.files[0]);
    apiRoot
      .post(`/v1/upload/file`, formData, {
        headers: { Authorization: `${token}` },
      })
      .then((res) => setImage(res?.data))
      .catch(() => error());
  };

  return (
    <div>
      <Header />
      <div className="container">
        <h2 className="admin_text">Salom Admin 👋</h2>
        <div>
          <p className="admin_pr">Yangi doktor qoshish</p>
          <form className="admin_form" onSubmit={(e) => onSubmits(e)}>
            <input
              onChange={(e) => setName(e.target.value)}
              required
              type="text"
              placeholder="Doktirning ismi sharifi"
            />
            <input
              onChange={(e) => setJob(e.target.value)}
              required
              type="text"
              placeholder="Doktorning kasbi"
            />
            <input
              onChange={(e) => setAbout(e.target.value)}
              required
              type="text"
              placeholder="Doktor haqida ma'lumot"
            />
            <input
              onChange={(e) => setPhone(e.target.value)}
              required
              type="text"
              placeholder="Doktorning tel raqami"
            />
            <input
              type="file"
              name="file"
              required
              accept="image/*"
              onChange={handleSubmit2}
              id="file"
            />
            {/* <input
              type="text"
              placeholder="Doktorning rasm silkasi"
              onChange={(e) => setImage(e.target.value)}
            /> */}
            <button type="submit">Qo'shish</button>
          </form>
        </div>
        <div>
          <p className="admin_prs">Klinika haqida</p>
          <form className="admin_form" onSubmit={(e) => onUpdate(e)}>
            <input
              required
              type="text"
              placeholder="Kompaniya Nomi"
              onChange={(e) => setAbout1(e.target.value)}
            />
            <input
              required
              type="text"
              placeholder="Qisqacha ma'lumot"
              onChange={(e) => setText(e.target.value)}
            />
            <input
              required
              type="text"
              placeholder="Qisqacha ma'lumot 2"
              onChange={(e) => setText1(e.target.value)}
            />
            <input
              required
              type="text"
              placeholder="Kompaniyaning tel raqami"
              onChange={(e) => setPhone1(e.target.value)}
            />
            <input
              required
              type="text"
              placeholder="kompaniyaning rasm silkasi 1"
              onChange={(e) => setImagef(e.target.value)}
            />
            <input
              required
              type="text"
              placeholder="kompaniyaning rasm silkasi 2"
              onChange={(e) => setImages(e.target.value)}
            />
            <button type="submit">Qo'shish</button>
          </form>
        </div>
      </div>
      <div className="container">
        <div>
          {worker?.map((elem) => (
            <div className="workers_group">
              <div className="btn-1">
                <button onClick={() => onDelete(elem.id)}>O'chirish</button>
              </div>
              <div className="workers_text">
                <h3>{elem?.fullname}</h3>
                <h4>{elem?.type}</h4>
                <p>
                  <div className="line"></div>
                  {elem?.about}
                </p>
                <h5>{elem?.phone_number}</h5>
              </div>
              <div className="workers_img">
                <img src={"http://" + elem?.image_url} alt="workers1" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Admin;
