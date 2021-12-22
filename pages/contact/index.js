import React, { useContext } from "react";
import { NavbarContext } from "../../context/NavProvider";
import Bubble from "../../components/Bubble";
const Contact = () => {
  const { useNavColor, colors, open } = useContext(NavbarContext);

  useNavColor(!open && colors.red);

  return (
    <div className="contact">
      <div className="contact-wrapper">
        <div className="contact-info">
          <span className="letter-spacing">Get in touch</span>
          <h3>Let's work together!</h3>
          <div className="contact-info-paragraph">
            <p>Our studio is located in Bogotá, Colombia. Opening times: Monday to Friday 8am to 5pm.</p>
          </div>
        </div>
        <form action="" className="contact-form">
          <label for="name">NAME</label>
          <input type="text" placeholder="Enter your name" id="name"/>
          <label for="email">EMAIL</label>
          <input type="email" placeholder="Enter your email" id="email"/>
          <label for="phone">PHONE</label>
          <input type="phone" placeholder="Enter your phone number" id="phone"/>
          <label for="message">MESSAGE</label>
          <input name="" placeholder="Enter your message" id="message"/>
          <Bubble size="small" background="#CECF70">Submit</Bubble>
        </form>
      </div>
    </div>
  );
};

export default Contact;
