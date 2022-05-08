import React, { useContext, useState } from "react";
import image1 from "../../images/quiz/image1.jpg";
import image2 from "../../images/quiz/image2.jpg";
import image3 from "../../images/quiz/image3.jpg";
import image4 from "../../images/quiz/image4.jpg";
import image5 from "../../images/quiz/image5.jpg";
import image6 from "../../images/quiz/image6.jpg";
import image7 from "../../images/quiz/image7.jpg";
import image8 from "../../images/quiz/image8.jpg";
import image9 from "../../images/quiz/image9.jpg";
import image10 from "../../images/quiz/image10.jpg";
import image11 from "../../images/quiz/image11.jpg";
import image12 from "../../images/quiz/image12.jpg";
import image13 from "../../images/quiz/image13.jpg";
import image14 from "../../images/quiz/image14.jpg";
import image15 from "../../images/quiz/image15.jpg";
import image16 from "../../images/quiz/image16.jpg";
import image17 from "../../images/quiz/image17.jpg";
import image18 from "../../images/quiz/image18.jpg";
import image19 from "../../images/quiz/image19.jpg";
import image20 from "../../images/quiz/image20.jpg";
import QuizElement from "../../components/QuizElement";
import { NavbarContext } from "../../context/NavProvider";
import Bubble from "../../components/Bubble";
import Head from "next/head";
const Quiz = () => {
  const { useNavColor, colors, open } = useContext(NavbarContext);
  useNavColor(colors.red);
  const [roomSelected, setRoomSelected] = useState(null);
  const [stylesSelected, setStylesSelected] = useState([]);

  const rooms = [
    {
      title: "Living Room",
      image: image1,
    },
    {
      title: "Beedrom",
      image: image2,
    },
    {
      title: "Entry",
      image: image3,
    },
    {
      title: "Kitchen",
      image: image4,
    },
    {
      title: "Comercial",
      image: image5,
    },
    {
      title: "Kid's Rooms",
      image: image6,
    },
    {
      title: "Family Room",
      image: image7,
    },
    {
      title: "Bathroom",
      image: image8,
    },
    {
      title: "HomeOffice",
      image: image9,
    },
    {
      title: "Bar",
      image: image10,
    },
    {
      title: "PowderRoom",
      image: image11,
    },
  ];
  const styles = [
    {
      title: "Minimal Scandinavian",
      image: image12,
      type: "style",
    },
    {
      title: "Mid Century Modern",
      image: image13,
      type: "style",
    },
    {
      title: "Spanish Rustic",
      image: image14,
      type: "style",
    },
    {
      title: "Contemporary",
      image: image15,
      type: "style",
    },
    {
      title: "Bohemian Artsy",
      image: image16,
      type: "style",
    },
    {
      title: "Traditional",
      image: image17,
      type: "style",
    },
    {
      title: "Modern Glam",
      image: image19,
      type: "style",
    },
    {
      title: "Industrial",
      image: image18,
      type: "style",
    },
    {
      title: "Chinoiserie Chic",
      image: image20,
      type: "style",
    },
  ];

  return (
    <>
      <Head>
        <title>Try our Quest</title>
      </Head>
      <div className="quiz">
        <div className="quiz-info">
          <span>Take our quick Quiz</span>
          <h3>{`WHAT SPACE WOULD\nYOU LIKE TO CHANGE?`}</h3>
        </div>
        <div className="quiz-game-container">
          {rooms.map((room) => (
            <QuizElement
              room={room}
              roomSelected={roomSelected}
              setRoomSelected={setRoomSelected}
            />
          ))}
        </div>
        {roomSelected && (
          <>
            <div className="quiz-info">
              <h3>{`WHAT STYLES\nDEFINE YOU?`}</h3>
              <p>Choose as many as you’d like!</p>
            </div>
            <div className="quiz-game-container">
              {styles.map((room) => (
                <QuizElement
                  room={room}
                  stylesSelected={stylesSelected}
                  setStylesSelected={setStylesSelected}
                />
              ))}
            </div>
          </>
        )}
        {stylesSelected.length === 2 && (
          <div className="contact contact-quiz">
            <div className="contact-wrapper">
              <div className="contact-info">
                <span>We will get in touch</span>
                <h3 className="quiz-h3">{`LET’S CREATE\nTHE SPACE OF\nYOUR DREAMS`}</h3>
              </div>
              <form className="contact-form form-quiz">
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
        )}
      </div>
    </>
  );
};

export default Quiz;
