import { useState, useEffect, useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import Bubble from "../components/Bubble";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Autoplay } from "swiper";
import carousel1 from "../images/home/carousel1.png";
import primero from "../images/home/01.png";
import segundo from "../images/home/02.png";
import carousel2 from "../images/home/carousel2.png";
import project1 from "../images/home/project1.jpg";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import useWindowDimensions from "../hooks/useWindowsDimensions";
import { NavbarContext } from "../context/NavProvider";
import project2 from "../images/home/servicios.JPG";
import hero1 from "../images/home/01.jpg";
import hero2 from "../images/home/02.jpg";
import hero3 from "../images/home/03.jpg";
import hero4 from "../images/home/04.jpg";
SwiperCore.use([Navigation]);
SwiperCore.use([Autoplay]);
export default function Home() {
  const { height, width } = useWindowDimensions();
  const { useNavColor, colors, open } = useContext(NavbarContext);

  const [mouse, setMouse] = useState(colors.white);

  useNavColor(mouse);

  return (
    <div className="home">
      {/*<div className="home-image-wrapper">
        <Swiper slidesPerView={1} autoplay={{ delay: 3000 }} spaceBetween={0}>
          <SwiperSlide>
            <div className="example">
              <Image src={hero1} objectFit="cover" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="example">
              <Image src={hero2} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="example">
              <Image src={hero3} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="example">
              <Image src={hero4} />
            </div>
          </SwiperSlide>
        </Swiper>
  </div>*/}

      <section className="home-about-wrapper">
        <div className="home-about-header">
          <span className="letter-spacing">About the Studio</span>
        </div>
        <div className="home-about-text">
          <div className="home-about-title">
            <h3>MAKE A SPACE YOUR OWN</h3>
            <div className="responsive-text">
              <h3>PERSONAL STATEMENT.</h3>
              <div className="bubble-container">
                <div className="bubble">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="90.985"
                    height="66.717"
                    viewBox="0 0 90.985 66.717"
                  >
                    <path
                      id="Trazado_135"
                      data-name="Trazado 135"
                      d="M45.492.18c25.315,4.14,45.492,14.6,45.492,32.6s-20.342,38.141-45.492,32.6S0,50.785,0,32.78,20.177-3.96,45.492.18Z"
                      transform="translate(0 0.401)"
                      fill="#cecf70"
                    />
                    <text
                      id="LEARN_MORE"
                      data-name="LEARN MORE"
                      transform="translate(9.421 36.717)"
                      fill="#f7f3f0"
                      font-size="10"
                      font-family="Raleway-SemiBold, Raleway"
                      font-weight="600"
                      letter-spacing="0.1em"
                    >
                      <tspan x="0" y="0">
                        LEARN MORE
                      </tspan>
                    </text>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="home-about-info">
            <p>
              We give the places you love a modern, defiant and daring new style
              that you have always dreamed of.
            </p>
          </div>
        </div>
      </section>
      <section className="home-service-wrapper">
        <div className="home-service-header-wrapper">
          <div className="home-service-header">
            <p className="letter-spacing">What we offer</p>
            <h3>Our services</h3>
          </div>
        </div>
        <div className="home-service-carousel">
          <Swiper
            spaceBetween={width > 1000 ? 50 : 30}
            slidesPerView={width > 1000 ? 2 : 1}
            navigation
            pagination={{ clickable: true, el: ".swiper-pagination" }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
            //autoplay={{ delay: 3000 }}
          >
            <SwiperSlide>
              <div className="slide-img">
                <Image src={primero} alt="" />
              </div>
              <div className="slide-info">
                <div className="slide-header">
                  <h3>01 · Styling Tips</h3>
                </div>
                <div className="slide-text">
                  <p>
                    Decorate micro spaces and surfaces such as tables,
                    bookshelves & more.
                  </p>
                </div>
                <div className="slide-link">
                  <Link href="/">
                    <a>View service</a>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide-img">
                <Image src={segundo} alt="" />
              </div>
              <div className="slide-info">
                <div className="slide-header">
                  <h3>02 · Deco Essentials</h3>
                </div>
                <div className="slide-text">
                  <p>
                    Study of the space or room you are looking to transform.
                  </p>
                </div>
                <div className="slide-link">
                  <Link href="/">
                    <a>View service</a>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide-img">
                <Image src={primero} alt="" />
              </div>
              <div className="slide-info">
                <div className="slide-header">
                  <h3>01 · Styling Tips</h3>
                </div>
                <div className="slide-text">
                  <p>
                    Decorate micro spaces and surfaces such as tables,
                    bookshelves & more.
                  </p>
                </div>
                <div className="slide-link">
                  <Link href="/">
                    <a>View service</a>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide-img">
                <Image src={segundo} alt="" />
              </div>
              <div className="slide-info">
                <div className="slide-header">
                  <h3>02 · Deco Essentials</h3>
                </div>
                <div className="slide-text">
                  <p>
                    Study of the space or room you are looking to transform.
                  </p>
                </div>
                <div className="slide-link">
                  <Link href="/">
                    <a>View service</a>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
      <section className="home-projects-wrapper">
        <div className="home-projects-info-wrapper">
          <div className="home-projects-info">
            <p className="letter-spacing">ABOUT THE STUDIO</p>
            <div className="home-projects-header">
              <h3>Fresh,</h3>
              <h3>contemporary</h3>
              <h3>ideas &</h3>
              <h3>functional</h3>
              <div style={{ display: "flex" }}>
                <Link href="/projects">
                  <h3>designs.</h3>
                </Link>
                <Link href="/projects">
                  <a>
                    <Bubble background={"#CECF70"}>Projects</Bubble>
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="home-projects-image">
            <Image src={project2} objectFit="contain" />
          </div>
        </div>
      </section>
    </div>
  );
}
