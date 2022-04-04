import React, { useState, useRef, useContext, useEffect } from "react";
import Collapsible from "react-collapsible";
import image4 from "../../images/services/image1.jpg";
import image5 from "../../images/services/image2.jpg";
import { NavbarContext } from "../../context/NavProvider";
import arrow from "../../images/Arrow.svg";
import Image from "next/image";
import useWindowDimensions from "../../hooks/useWindowsDimensions";
import Link from "next/link";
const Service = () => {
  const { height, width } = useWindowDimensions();
  const { useNavColor, colors } = useContext(NavbarContext);
  const [mouse, setMouse] = useState(colors.white);
  const myRef = useRef(null);
  const executeScroll = () => myRef.current.scrollIntoView();
  useNavColor(mouse);
  const options = [
    {
      title: "Styling Tips",
      subtitle: `
      · Advice on how to decorate micro spaces and surfaces such as tables, bookshelves, and walls.\n
      ·  20 Minute Call.\n
      ·  1 Moodboard + 2 Rounds of revision.\n
      ·  Basic Design Consultation on (choose one):\n
        •      Choice of wallpaper\n
        •      Choice of art\n
        •      Choice of lighting\n
        •      Choice of paint color\n
      `,
      order: "01",
      link: "14",
      price: "40",
    },
    {
      title: "Deco Essentials",
      subtitle: `
      ·  A personalized study on the current state of the room you are looking to transform.\n
      · Includes:\n
        •      1 hour video call with design suggestions and answer any questions you may have.\n
        •      Establishing a style and color palette.\n
        •      Mood board of the space.\n
        •      Shopping List.\n
      `,
      order: "02",
      link: "15",
      price: "40",
    },
    {
      title: "The Veciiin Design",
      subtitle: `
      · Complete styling of 1 space.\n
      · Includes:\n
        •      A 1-hour meeting to learn about your needs and the current state of the room you want to design or redecorate.\n
        •      2 style proposals, color pallete, and choice of furniture.\n
        •      2 different room plans to help you decide on the best location for your furniture.\n
        •      A 1-hour conversation on the delivered 3D render of the final design of your room.\n
        •      15% Discount on Veciiin furniture.\n
      `,
      order: "03",
      link: "17",
      price: "40",
    },
    {
      title: "The Veciiin Design Plus",
      subtitle: `
      ·  Experience a stress-free full interior design or makeover of one or more spaces.\n
      ·  This service includes design direction and project management of more than one\n
      space.\n
      ·  Contact us to learn more about our face-to-face personalized consultations,\n
      installation services, 3D renderings, furniture design, quotes, shopping lists, interior\n
      architecture, and renovations.\n
      ·  Quotes are subject to the project of choice.
      `,
      order: "04",
      link: "18",
      price: "40",
    },

    {
      title: "Art Consultation",
      subtitle: `
      ·  Experience a stress-free full interior design or makeover of one or more space.\n
      ·  Contact us to learn more about our face-to-face personalised consultations,\n
      installation services, 3D rendering,\n
      ·  Furniture design, quotes, shopping lists, interior architecture and renovations.
      `,
      order: "05",
      link: "19",
      price: "40",
    },
    {
      title: "Furniture Design",
      subtitle: `
      ·  Falta texto`,
      order: "06",
      link: "16",
      price: "40",
    },
  ];

  const CollapsibleHeader = ({ title, order }) => {
    const [toggleOption, setToggleOption] = useState(false);

    return (
      <div onClick={() => setToggleOption(!toggleOption)}>
        <div className="services-option-header">
          <span>{order}</span>
          <div className="services-title-subtitle">
            <h4>{title}</h4>
          </div>
          {toggleOption ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40.101"
              height="66"
              viewBox="0 0 40.101 66"
            >
              <g
                id="Grupo_90"
                data-name="Grupo 90"
                transform="translate(0 0.02)"
              >
                <path
                  id="Trazado_85"
                  data-name="Trazado 85"
                  d="M20.05-.115C31.208,1.923,40.1,7.069,40.1,15.931S31.135,34.7,20.05,31.976,0,24.792,0,15.931,8.893-2.153,20.05-.115Z"
                  transform="translate(0 18.055)"
                  fill="#cecf70"
                />
                <text
                  id="_"
                  data-name="-"
                  transform="translate(8.572 52.98)"
                  fill="#f7f3f0"
                  font-size="56"
                  font-family="Raleway-ExtraLight, Raleway"
                  font-weight="200"
                  letter-spacing="0.1em"
                >
                  <tspan x="0" y="-3">
                    -
                  </tspan>
                </text>
              </g>
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40.101"
              height="66"
              viewBox="0 0 40.101 66"
            >
              <g
                id="Grupo_90"
                data-name="Grupo 90"
                transform="translate(0 0.02)"
              >
                <path
                  id="Trazado_85"
                  data-name="Trazado 85"
                  d="M20.05-.115C31.208,1.923,40.1,7.069,40.1,15.931S31.135,34.7,20.05,31.976,0,24.792,0,15.931,8.893-2.153,20.05-.115Z"
                  transform="translate(0 18.055)"
                  fill="#cecf70"
                />
                <text
                  id="_"
                  data-name="+"
                  transform="translate(8.572 52.98)"
                  fill="#f7f3f0"
                  font-size="56"
                  font-family="Raleway-ExtraLight, Raleway"
                  font-weight="200"
                  letter-spacing="0.1em"
                >
                  <tspan x="0" y="0">
                    +
                  </tspan>
                </text>
              </g>
            </svg>
          )}
        </div>
      </div>
    );
  };

  const CollapsibleSubtitle = ({ subtitle, id, price }) => {
    return (
      <>
        <div className="collapsible-subtitle">
          <div></div>
          <div className="collapsible-paragraph">
            <p>{subtitle}</p>
            <div className="collapsible-inquire">
              <Link href={`shop/services/${id}`}>
                <a>Inquire now</a>
              </Link>
              <p>   U$D {price}</p>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="services">
      <div className="services-info">
        <div className="arrow" onClick={executeScroll}>
          <Image src={arrow} />
        </div>
        <span className="letter-spacing">Our Services</span>
        <h3>ELEVATE</h3>
        <h3>YOUR SPACE</h3>
        <p>
          A space that generates conversation or helps you relax. You name it,
          we do it for you.
        </p>
      </div>
      <div className="services-options-container" ref={myRef}>
        {options.map((element) => (
          <Collapsible
            overflowWhenOpen={"visible"}
            trigger={
              <CollapsibleHeader title={element.title} order={element.order} />
            }
            key={element.order}
          >
            <CollapsibleSubtitle
              subtitle={element.subtitle}
              price={element.price}
              id={element.link}
            />
          </Collapsible>
        ))}
        {/*options.map((element) => (
          <ServiceOption
            order={element.order}
            title={element.title}
            subtitle={element.subtitle}
            img={element.img}
          />
        ))*/}
      </div>
      <div className="services-quiz">
        <div className="services-quiz-wrapper">
          <div className="services-quiz-info">
            <span className="letter-spacing">Hey!</span>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ display: "flex" }}>
                <h3>CAN’T FIND </h3>
                <div className="bubble">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="83.984"
                    height="62.338"
                    viewBox="0 0 83.984 62.338"
                  >
                    <path
                      id="Trazado_135"
                      data-name="Trazado 135"
                      d="M41.992.142C65.36,4.01,83.984,13.78,83.984,30.6S65.207,66.241,41.992,61.063,0,47.426,0,30.6,18.625-3.726,41.992.142Z"
                      transform="translate(0 0.401)"
                      fill="#cecf70"
                    />
                    <text
                      id="TAKE_OUR_QUIZ"
                      data-name="TAKE OUR QUIZ"
                      transform="translate(42.282 28.781)"
                      fill="#f7f3f0"
                      font-size="10"
                      font-family="Raleway-SemiBold, Raleway"
                      font-weight="600"
                      letter-spacing="0.1em"
                    >
                      <tspan x="-13.935" y="0">
                        TAKE
                      </tspan>
                      <tspan x="-27.575" y="12">
                        OUR QUIZ
                      </tspan>
                    </text>
                  </svg>
                </div>
              </div>
              <h3>{`WHAT YOU ARE\nLOOKING FOR?`}</h3>
              <div className="bubble-responsive">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="83.984"
                  height="62.338"
                  viewBox="0 0 83.984 62.338"
                >
                  <path
                    id="Trazado_135"
                    data-name="Trazado 135"
                    d="M41.992.142C65.36,4.01,83.984,13.78,83.984,30.6S65.207,66.241,41.992,61.063,0,47.426,0,30.6,18.625-3.726,41.992.142Z"
                    transform="translate(0 0.401)"
                    fill="#cecf70"
                  />
                  <text
                    id="TAKE_OUR_QUIZ"
                    data-name="TAKE OUR QUIZ"
                    transform="translate(42.282 28.781)"
                    fill="#f7f3f0"
                    font-size="10"
                    font-family="Raleway-SemiBold, Raleway"
                    font-weight="600"
                    letter-spacing="0.1em"
                  >
                    <tspan x="-13.935" y="0">
                      TAKE
                    </tspan>
                    <tspan x="-27.575" y="12">
                      OUR QUIZ
                    </tspan>
                  </text>
                </svg>
              </div>
            </div>
          </div>
          <div className="services-quiz-images">
            <div>
              <Image src={image4} alt="" height="300px" width="400px" />
            </div>
            <div>
              <Image src={image5} alt="" height="300px" width="400px" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
