import React, { useContext } from "react";
import { NavbarContext } from "../../context/NavProvider";
import Bubble from "../../components/Bubble";
import axios from "axios";
import Head from "next/head";

const Contact = () => {
  const { useNavColor, colors, open } = useContext(NavbarContext);

  useNavColor(!open && colors.red);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("algo");

    axios({
      url: "http://localhost:3000/api/email",
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      //data: JSON.stringify(item),
    }).then((res) => console.log(res));
    //return res.data.id;
  };

  return (
    <>
      <Head>
        <title>Veciiin Contact</title>
      </Head>
      <div className="contact">
        <div className="contact-wrapper">
          <div className="contact-info">
            <span className="letter-spacing">Get in touch</span>
            <h3>{`Let's get\nto work!`}</h3>
            <div className="contact-info-paragraph">
              <p>Based in Colombia, available worldwide</p>
            </div>
          </div>
          <form action="" className="contact-form" onSubmit={handleSubmit}>
            <label for="name">NAME</label>
            <input type="text" placeholder="Enter your name" id="name" />
            <label for="email">EMAIL</label>
            <input type="email" placeholder="Enter your email" id="email" />
            <label for="phone">PHONE</label>
            <input
              type="phone"
              placeholder="Enter your phone number"
              id="phone"
            />
            <label for="message">MESSAGE</label>
            <input name="" placeholder="Enter your message" id="message" />
            <Bubble background="#CECF70">Submit</Bubble>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
