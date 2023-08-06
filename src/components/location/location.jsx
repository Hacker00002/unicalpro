import React from "react";

const Location = () => {
  return (
    <div className="container">
      <div className="contact_group">
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d96678.81044000608!2d72.23724489414295!3d40.779335044657465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1690896042389!5m2!1sen!2s"
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
