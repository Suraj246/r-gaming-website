import React from "react";
import "./Footer.css";

function Contact() {
  return (
    <>
      <div className="footer">
        <div className="contact">
          <h3 className="contact-heading">Contact Us</h3>
          <address>
            <p>Phone: 6780934976</p>
            <p>Location: Street 678677, Miami, Florida</p>
            <p>Email: asdkfjskdf@gmail.com</p>
          </address>
        </div>
        <hr />
        <div className="social-media-links">
          <div className="fb">
            <i className="bx bxl-facebook "></i>
          </div>
          <div className="twi">
            <i className="bx bxl-twitter "></i>
          </div>
          <div className="insta">
            <i className="bx bxl-instagram "></i>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
