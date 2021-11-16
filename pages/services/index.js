import React, { useState, useRef, useContext, useEffect } from "react";
import { gsap } from "gsap";
import serviceImage from "../../images/services/image1.jpg";
import Bubble from "../../components/Bubble";
import image2 from "../../images/services/image2.jpg";
import image3 from "../../images/services/image3.jpg";
import image4 from "../../images/services/image4.png";
import image5 from "../../images/services/image5.png";
import { NavbarContext } from "../../context/NavProvider";
import Image from "next/image";
const Service = () => {
  const { useNavColor, colors } = useContext(NavbarContext);
  const [mouse, setMouse] = useState(colors.white);

  useNavColor(mouse);
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
    const imageHover = useRef({});
    const handleMouseLeave = (e) =>{
      imageHover.current.style.opacity = 0;
      imageHover.current.style.transform = `translate(-50%, -50%) rotate(-5deg)`;
      imageHover.current.style.transform = 'scale(0.8, 0.8)';
    } 
    const handleMouseMove = (e) => {
      if(toggleOption){
        imageHover.current.style.opacity = 0;
        imageHover.current.style.transform = `translate(-50%, -50%) rotate(-5deg)`;
        imageHover.current.style.transform = 'scale(0.8, 0.8)';
      }else{
        imageHover.current.style.opacity = 1;
        imageHover.current.style.transform = `translate(-100%, -50% ) rotate(5deg)`;
        //imageHover.current.style.transform = 'scale(1, 1)';
        imageHover.current.style.left = e.clientX + "px";
      }
      
    }
    return (
      <div
        className={
          toggleOption ? "services-option open" : "services-option closed"
        }
        onClick={() => setToggleOption(!toggleOption)}
        onMouseMove={(e) => handleMouseMove(e)}
        onMouseLeave={(e) => handleMouseLeave(e)}
      >
        <div className="services-option-header">
          <span>{order}</span>
          <div className="services-title-subtitle">
            <h4>{title}</h4>
            <p className="service-option-text">{subtitle}</p>
            <span className="service-option-text">Inquire</span>
          </div>
            <div className="image-container" ref={imageHover} >
            <Image src={img} alt="" />
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
                  <tspan x="0" y="-3" >
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

  return (
    <div className="services">
      <div className="services-info">
        <span className="letter-spacing">Our Services</span>
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
            <span className="letter-spacing">Hey!</span>
            <h3>Didn’t find what you are looking for?</h3>
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
                  data-name="TAKE
OUR QUIZ"
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
          <div className="services-quiz-images">
            <div>
              <Image src={image4} alt="" />
            </div>
            <div>
              <Image src={image5} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
