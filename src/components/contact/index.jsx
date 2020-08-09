import React from "react";

function Contact() {
  return (
    <div className="contact-page">
      <h1>Contact Details</h1>
      <div class="contact-informations">
      <div className="contact-info">
        <div><i class="fas fa-map-marker-alt"></i>Cluj-Napoca, Romania</div> 
        <div><i class="fas fa-phone-alt"></i>0746.895.615</div>
        <div><i class="fas fa-envelope"></i>renatacioltea@gmail.com</div>
      </div>
      <div className="contact-links">
        <a href="https://www.facebook.com/renata.cioltea" target="blank">
          <i className="fa fa-facebook-square"></i>
        </a>
        <a href="https://www.linkedin.com/in/renata-cioltea-99188b125/" target="blank">
          <i className="fa fa-linkedin-square"></i>
        </a>
        <a href="https://github.com/renatacioltea" target="blank">
          <i className="fa fa-github-square"></i>
        </a>
      </div>
    </div>

    </div>
  );
}

export default Contact;
