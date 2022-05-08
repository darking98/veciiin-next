import { useState, useContext, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Bubble from "../components/Bubble";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Autoplay, EffectFade } from "swiper";
import services from "../shared/services/services";
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
import hero5 from "../images/home/05.jpg";
import hero6 from "../images/home/06.jpg";
import hero7 from "../images/home/07.jpg";
import hero8 from "../images/home/08.jpg";
import arrow from "../images/Arrow.svg";
import heromobile1 from "../images/home/home-mobile/01.jpg";
import heromobile2 from "../images/home/home-mobile/02.jpg";
import heromobile3 from "../images/home/home-mobile/03.jpg";
import heromobile4 from "../images/home/home-mobile/04.jpg";
import heromobile5 from "../images/home/home-mobile/05.jpg";
import heromobile6 from "../images/home/home-mobile/06.jpg";
import heromobile7 from "../images/home/home-mobile/07.jpg";
import heromobile8 from "../images/home/home-mobile/08.jpg";
import Head from "next/head";
SwiperCore.use([Navigation]);
SwiperCore.use([Autoplay]);
SwiperCore.use([EffectFade]);
import "swiper/css/effect-fade";

export default function Home() {
  const { height, width } = useWindowDimensions();
  const { useNavColor, colors } = useContext(NavbarContext);
  const [mouse, setMouse] = useState(colors.red);
  const myRef = useRef(null);
  const executeScroll = () => myRef.current.scrollIntoView();
  useNavColor(mouse);
  const homeImages = [hero1, hero2, hero3, hero4, hero5, hero6, hero7, hero8];
  const homeMobileImages = [
    heromobile1,
    heromobile2,
    heromobile3,
    heromobile4,
    heromobile5,
    heromobile6,
    heromobile7,
    heromobile8,
  ];
  return (
    <>
      <Head>
        <title>Veciiin Home</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="home">
        <div className="home-image-wrapper desktop">
          <div className="arrow" onClick={executeScroll}>
            <Image src={arrow} />
          </div>
          <Swiper
            loop={true}
            slidesPerView={1}
            autoplay={{ delay: 1000 }}
            spaceBetween={0}
            effect="fade"
            keyboard={{
              enabled: true,
              onlyInViewport: false,
            }}
            //fadeEffect={{ crossFade: true }}
          >
            {homeImages.map((image) => (
              <SwiperSlide>
                <div className="example">
                  <Image
                    src={image}
                    objectFit="cover"
                    priority={true}
                    loading="eager"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="home-image-wrapper mobile">
          <div className="arrow" onClick={executeScroll}>
            <Image src={arrow} />
          </div>
          <Swiper slidesPerView={1} autoplay={{ delay: 3000 }} spaceBetween={0}>
            {homeMobileImages.map((image) => (
              <SwiperSlide>
                <div className="example">
                  <Image
                    src={image}
                    objectFit="cover"
                    priority={true}
                    loading="eager"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <section className="home-about-wrapper" ref={myRef}>
          <div className="home-about-header">
            <span className="letter-spacing">About the Studio</span>
          </div>
          <div className="home-about-text">
            <div className="home-about-title">
              <h3>{`MAKE A SPACE YOUR OWN\nPERSONAL STATEMENT`}</h3>
            </div>
            <div className="home-about-info">
              <p>
                We give the places you love a modern and daring new style that
                you have always dreamed of
              </p>
            </div>

            <div className="bubble-container">
              <div className="bubble">
                <Link href="/about">
                  <a>
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
                  </a>
                </Link>
              </div>
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
              {services.map((service) => (
                <SwiperSlide>
                  <div className="slide-img">
                    <Image src={service.image} alt="" />
                  </div>
                  <div className="slide-info">
                    <div className="slide-header">
                      <h3>{service.title}</h3>
                    </div>
                    <div className="slide-text">
                      <p>{service.description}</p>
                    </div>
                    <div className="slide-link">
                      <Link href={service.path}>
                        <a>View service</a>
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>
        <section className="home-projects-wrapper">
          <div className="home-projects-info-wrapper">
            <div className="home-projects-info">
              <p className="letter-spacing">ABOUT THE STUDIO</p>
              <div className="home-projects-header">
                <h3>{`Fresh,\ncontemporary\nideas &\nfunctional`}</h3>
                <div style={{ display: "flex" }}>
                  <Link href="/projects">
                    <h3>designs</h3>
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
    </>
  );
}
