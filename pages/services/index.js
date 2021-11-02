import React, { useState, useRef, useContext, useEffect } from "react";
import { gsap } from "gsap";
import serviceImage from "../../images/services/image1.jpg";
import Bubble from "../../components/Bubble";
import image2 from "../../images/services/image2.jpg";
import image3 from "../../images/services/image3.jpg";
//import { NavbarContext } from "../context/NavProvider";
import Image from "next/image";
const Service = () => {
  //const {useNavColor, colors} = useContext(NavbarContext)
  //const [mouse, setMouse] = useState(colors.white);

  /*useNavColor(mouse)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      (window.scrollY < 800)? setMouse(colors.white) : setMouse(colors.red)
    })
    
  },[mouse])
  */
  const options = [
    {
      title: "Styling Refresh",
      subtitle:
        "Este proyecto es para las personas que quieren un diseño de más de un espacio, manejo de proyectos, obras civiles, etc).",
      order: "01",
      img: serviceImage,
    },
    {
      title: "E-Home Styling",
      subtitle:
        "Este proyecto es para las personas que quieren un diseño de más de un espacio, manejo de proyectos, obras civiles, etc).",
      order: "02",
      img: serviceImage,
    },
    {
      title: "Standard Home Styling",
      subtitle:
        "Este proyecto es para las personas que quieren un diseño de más de un espacio, manejo de proyectos, obras civiles, etc).",
      order: "03",
      img: serviceImage,
    },
    {
      title: "Premium Home Styling",
      subtitle:
        "Este proyecto es para las personas que quieren un diseño de más de un espacio, manejo de proyectos, obras civiles, etc).",
      order: "04",
      img: serviceImage,
    },
  ];

  const ServiceOption = ({ title, subtitle, order, img }) => {
    const [toggleOption, setToggleOption] = useState(false);
    const imageHover = useRef(null);

    return (
      <div
        className={
          toggleOption ? "services-option open" : "services-option closed"
        }
        onClick={() => setToggleOption(!toggleOption)}
        onMouseEnter={(e) => gsap.to(imageHover.current, { autoAlpha: 1 })}
        onMouseLeave={(e) => gsap.to(imageHover.current, { autoAlpha: 0 })}
        onMouseMove={(e) =>
          !toggleOption
            ? gsap.set(imageHover.current, {
                x: e.clientX - 1000 + "px",
              })
            : gsap.to(imageHover.current, { autoAlpha: 0 })
        }
      >
        <div className="services-option-header">
          <span>{order}</span>
          <div className="services-title-subtitle">
            <h4>{title}</h4>
            <p className="service-option-text">{subtitle}</p>
            <span className="service-option-text">Inquire</span>
          </div>
          <Image src={img} alt="" ref={imageHover} />

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="56.232"
            height="94"
            viewBox="0 0 56.232 94"
          >
            <g
              id="Grupo_79"
              data-name="Grupo 79"
              transform="translate(-1775.384 -1235)"
            >
              <path
                id="Trazado_85"
                data-name="Trazado 85"
                d="M28.116,0C43.762,2.857,56.232,10.074,56.232,22.5S43.66,48.824,28.116,45,0,34.926,0,22.5,12.47-2.857,28.116,0Z"
                transform="translate(1775.384 1259)"
                fill="#cecf70"
              />
              <text
                id="_"
                data-name="+"
                transform="translate(1787 1310)"
                fill="#f7f3f0"
                font-size="80"
                font-family="Raleway-ExtraLight, Raleway"
                font-weight="200"
                letter-spacing="0.1em"
              >
                <tspan x="0" y={toggleOption === true ? "-8" : "0"}>
                  {toggleOption === true ? "-" : "+"}
                </tspan>
              </text>
            </g>
          </svg>
        </div>
      </div>
    );
  };

  return (
    <div className="services">
      <div className="services-info">
        <span>Our Services</span>
        <h3>Encontrá el servicio para vos</h3>
        <p>
          Pregunta por nuestras asesorías especializadas para ti con visitas
          presenciales, servicio de instalaciones, 3d renders, diseño de
          mobiliario, cotizaciones, lista de compras, arquitectura de interiores
        </p>
      </div>

      <div className="services-images-container">
        <div className="service-image image1" />
        <div className="service-image image2" />
        <div className="service-image image3" />
        <div className="service-image image4" />
      </div>

      <div className="services-options-container">
        {options.map((element) => (
          <ServiceOption
            order={element.order}
            title={element.title}
            subtitle={element.subtitle}
            img={element.img}
          />
        ))}
      </div>
      <div className="services-quiz">
        <div className="services-quiz-wrapper">
          <div className="services-quiz-info">
            <span>Hey!</span>
            <h3>Didn’t find what you are looking for?</h3>
            <Bubble background="#CECF70">Take our quiz!</Bubble>
          </div>
          <div className="services-quiz-images">
            <div>
              <Image src={image2} alt="" />
            </div>
            <div>
              <Image src={image3} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
