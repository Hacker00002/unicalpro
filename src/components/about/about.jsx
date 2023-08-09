import React, { useEffect } from "react";
import doctors from "../../img/doctors.png";
import { useState } from "react";

const About = () => {
  const [about, setAbout] = useState([]);
  useEffect(() => {
    const fetchdata = async () => {
      const datas = await fetch("https://artmedical.uz/v1/aboutus").then(
        (data) => data.json()
      );
      setAbout(datas);
    };
    fetchdata();
  }, []);
  return (
    <div className="about_group">
      <div className="text_about">
        <div className="container__hero">
          <div>
            <h1>{about?.title}</h1>
            <p>{about?.paragraph}</p>
            <div className="bttn">
              <a href={"tel:" + about.phone_number}>{about?.phone_number}</a>
            </div>
          </div>
        </div>
      </div>
      <div>
        <img
          src={"https://" + about?.f_image_url}
          style={{ width: "50vw", height: "100vh" }}
          alt="doctoes"
        />
      </div>
    </div>
  );
};

export default About;
