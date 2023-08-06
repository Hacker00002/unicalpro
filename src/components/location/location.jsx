import React from "react";

const Location = () => {
  return (
    <div className="container">
      <div className="contact_group">
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1510.2664740210755!2d72.321468!3d40.794281!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bc9506424eccbf%3A0xd8d269fb57a92b8c!2sImpuls%20klinik!5e0!3m2!1sru!2sus!4v1691304960006!5m2!1sru!2sus"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="contact">
          <h3>Ariza qoldirish</h3>
          <div className="contact_input">
            <input type="text" placeholder="Ismingiz" className="input_1" />
            <input type="text" placeholder="+998" className="input_2" />
            <input type="text" placeholder="Izoh..." className="input_3" />
            <a href="#" className="contact_btn">
              Jo'natish
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
