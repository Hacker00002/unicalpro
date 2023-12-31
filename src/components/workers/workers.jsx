import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const Workers = () => {
  const [worker, setWorker] = useState([]);
  useEffect(() => {
    const fetchdata = async () => {
      const datas = await fetch("https://artmedical.uz/v1/doctors").then(
        (elem) => elem.json()
      );
      setWorker(datas?.doctors);
    };
    fetchdata();
  }, []);
  return (
    <div className="container">
      <div className="aboutwe_text">
        <h2>Bizning mutaxasislar</h2>
      </div>
      <div>
        {worker?.map((elem) => (
          <div className="workers_group">
            <div className="workers_text">
              <h3>{elem?.fullname}</h3>
              <h4>{elem?.type}</h4>
              <p>
                <div className="line"></div>
                {elem?.about}
              </p>
              <a href={"tel:" + elem.phone_number}>{elem?.phone_number}</a>
            </div>
            <div className="workers_img">
              <img
                src={"http://" + elem?.image_url}
                alt="workers1"
                style={{ width: "365px", height: "485px", left: "715px" }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Workers;
