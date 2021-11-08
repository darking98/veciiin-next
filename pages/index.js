import { useState, useEffect, useContext } from "react";
import Image from "next/image";
import Bubble from "../components/Bubble";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import carousel1 from "../images/home/carousel1.png";
import carousel2 from "../images/home/carousel2.png";
import project1 from "../images/home/project1.jpg";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import useWindowDimensions from "../hooks/useWindowsDimensions";
import { NavbarContext } from "../context/NavProvider";
SwiperCore.use([Navigation]);

export default function Home() {
  const { height, width } = useWindowDimensions();
  const {useNavColor, colors, open} = useContext(NavbarContext)

  const [mouse, setMouse] = useState(colors.white);

  useNavColor(mouse)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      (window.scrollY < 900 || (window.scrollY > 1900 && window.scrollY <2800)) ? setMouse(colors.white) : setMouse(colors.red)
    })
    
  },[mouse])
  return (
    <div className="home">
      <div className="home-image-wrapper">
        <div className="home-image home-image-left"></div>
        <div className="home-image home-image-right"></div>
      </div>

      <section className="home-about-wrapper">
        <div className="home-about-header">
          <span className="letter-spacing">About the Studio</span>
        </div>
        <div className="home-about-text">
          <div className="home-about-title">
            <h3>New ways of transforming your space.</h3>
            <div className="bubble-container">
              <Bubble background="#CECF70">Learn More</Bubble>
            </div>
          </div>
          <div className="home-about-info">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              urna urna, condimentum in velit a, pellentesque iaculis urna.
              Aliquam et urna erat. Donec luctus, dui ut scelerisque facilisis,
              quam purus mollis elit, at tincidunt magna enim id quam. Nunc
              luctus pulvinar odio n dictum. Donec elementum vehicula ex ac
              varius.
            </p>
          </div>
        </div>
      </section>
      <section className="home-service-wrapper">
        <div className="home-service-header-wrapper">
          <div className="home-service-header">
            <p>We can help you with</p>
            <h3>Our services</h3>
          </div>
        </div>
        <div className="home-service-carousel">
          <Swiper
            spaceBetween={width > 1000 ? 10 : 30}
            slidesPerView={width > 1000 ? 2 : 1}
            navigation
            pagination={{ clickable: true, el: ".swiper-pagination" }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            <SwiperSlide>
              <div className="slide-img">
                <Image src={carousel1} alt="" />
              </div>
              <div className="slide-info">
                <div className="slide-header">
                  <h3>Styling Refresh</h3>
                  <Bubble background={"#CECF70"}>View More</Bubble>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide-img">
                <Image src={carousel2} alt="" />
              </div>
              <div className="slide-info">
                <div className="slide-header">
                  <h3>E-Home Styling</h3>
                  <Bubble background={"#CECF70"}>View More</Bubble>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide-img">
                <Image src={carousel1} alt="" />
              </div>
              <div className="slide-info">
                <div className="slide-header">
                  <h3>Styling Refresh</h3>
                  <Bubble background={"#CECF70"}>View More</Bubble>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide-img">
                <Image src={carousel2} alt="" />
              </div>
              <div className="slide-info">
                <div className="slide-header">
                  <h3>E-Home Styling</h3>
                  <Bubble background={"#CECF70"}>View More</Bubble>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
      <section className="home-projects-wrapper">
        <div className="home-projects-info-wrapper">
          <div className="home-projects-info">
            <p className="letter-spacing">Our Work</p>
            <div className="home-projects-header">
              <h3>Fresh, contemporary ideas & functional designs.</h3>
              <Bubble background={"#CECF70"}>Projects</Bubble>
            </div>
          </div>
          <div className="home-projects-image">
            <Image src={project1}/>
          </div>
        </div>
      </section>
    </div>
  );
}
