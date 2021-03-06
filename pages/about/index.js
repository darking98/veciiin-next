import React, { useContext, useState, useEffect } from "react";
import { NavbarContext } from "../../context/NavProvider";
import Image from "next/image";
import Bubble from "../../components/Bubble";
import aboutImages from "../../images/about/about-images.png";
//import aboutHorizontal from "../../images/about/asd.webp";
import naty from "../../images/about/NATYVECINO.jpg";
import aboutFeatured from "../../images/about/Imagen-22.png";
import Head from "next/head";
const About = () => {
  const { useNavColor, colors, open } = useContext(NavbarContext);
  const [mouse, setMouse] = useState(colors.red);

  useNavColor(mouse);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY < 1600 ? setMouse(colors.red) : setMouse(colors.white);
    });
  }, [mouse]);
  return (
    <>
      <Head>
        <title>About Veciiin</title>
      </Head>
      <div className="about-container">
        <div className="about">
          <div className="about-profile">
            <div className="about-profile-col">
              <div className="col-header">
                <div className="col-header-div">
                  <div>
                    <h3>BEHIND VECIIIN STUDIO/ THE</h3>
                    <div className="about-profile-h3-bubble">
                      <h3>FOUNDER’S STORY</h3>
                      <Bubble background="#CECF70">Projects</Bubble>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="about-wrapper">
            <div className="about-image">
              <Image src={naty} />
            </div>
            <div className="about-profile second-about">
              <p className="second-paragraph ">
                Natalie Vecino’s journey into the art world began in 2012 in New
                York where she studied Strategic Design and Management at
                Parsons School of Art & Design, a career focused on strategic
                design management.
              </p>
              <p className="second-paragraph">
                In addition, she took courses to learn plastic arts at Aschan,
                an Asian art academy. In 2015, she was offered her first job in
                interior design at a firm whose partners are the creators of
                many famous movie sets such as Sex and the City and The Devil
                Wears Prada. As a result of this experience, Natalie developed
                an interest in interior design and that is why in 2016 she
                decided to move to Miami to continue learning.
              </p>
              <p className="second-paragraph">
                Having gained a great deal of experience, two years later she
                returns to Colombia and in 2019 Natalie creates her studio,
                Veciiin. A studio with a focus on product and furniture design
                for residential and commercial projects.
              </p>
              <p className="second-paragraph">
                The objective of the studio is to propose fresh, contemporary
                ideas to create functional designs that spark conversation.
                Currently, Veciiin studio has completed various projects in
                Colombia and the United States.
              </p>
            </div>
          </div>
        </div>

        
      </div>
    </>
  );
};

export default About;
