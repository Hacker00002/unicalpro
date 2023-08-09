import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Component from "./component";
import Adminlogin from "./admin/adminlogin";
import Admin from "./admin/admin";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Component />} />
          <Route path="login-admin" element={<Adminlogin />} />
          <Route path="dashboard-admin" element={<Admin />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
