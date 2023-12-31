import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const Aboutwe = () => {
  const [aboutwe, setAboutwe] = useState([]);
  useEffect(() => {
    const fetchdata = async () => {
      const datas = await fetch("https://artmedical.uz/v1/aboutus").then(
        (elem) => elem.json()
      );
      setAboutwe(datas);
    };
    fetchdata();
  }, []);
  return (
    <div className="container">
      <div className="aboutwe_text">
        <h2>Biz haqimizda</h2>
      </div>
      <div className="aboutwe_group">
        <div className="aboutwe_texts">
          <p>
            <div className="line"></div>
            {aboutwe?.about}
          </p>
        </div>
        <div className="aboutwe_img">
          <img
            src={"https://" + aboutwe?.s_image_url}
            alt="hospital"
            style={{
              width: "100%",
              height: "520px",
              top: "969px",
              left: "640px",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Aboutwe;
