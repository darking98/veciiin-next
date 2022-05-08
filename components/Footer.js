import React from "react";
import footer1 from "../images/footer/footer1.jpg";
import footer2 from "../images/footer/footer2.jpg";
import footer3 from "../images/footer/footer3.jpg";
import footer4 from "../images/footer/footer4.jpg";
import Image from "next/image";
SwiperCore.use([Navigation]);
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import useWindowDimensions from "../hooks/useWindowsDimensions";
import Link from "next/link";
const Footer = () => {
  const { height, width } = useWindowDimensions();
  return (
    <div className="footer">
      <div className="footer-follow">
        <span>Follow us!</span>
        <a href="http://instagram.com/veciiin" target="_blank" rel="noreferrer">
          <h3>@Veciiin</h3>
        </a>
      </div>
      {width > 1000 ? (
        <div className="footer-social-images">
          <div className="footer-social-images-container">
            <Link href="https://www.instagram.com/p/CQrgisXLc9H/">
              <a target="_blank">
                <Image src={footer1} alt="" />
              </a>
            </Link>
          </div>
          <div className="footer-social-images-container">
            <Link href="https://www.instagram.com/p/CLCcMK3LIKB/">
              <a target="_blank">
                <Image src={footer2} alt="" />
              </a>
            </Link>
          </div>
          <div className="footer-social-images-container">
            <Link href="https://www.instagram.com/p/CGVUii5H2Wa">
              <a target="_blank">
                <Image src={footer3} alt="" />
              </a>
            </Link>
          </div>
          <div className="footer-social-images-container">
            <Link href="https://www.instagram.com/p/CGTCo27HpKK/">
              <a target="_blank">
                <Image src={footer4} alt="" />
              </a>
            </Link>
          </div>
        </div>
      ) : (
        <div className="footer-social-images">
          <Swiper
            slidesPerView={2}
            spaceBetween={0}
            navigation
            pagination={{ clickable: true, el: ".swiper-pagination" }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            <SwiperSlide>
              <div className="footer-social-images-container">
                <Link href="https://www.instagram.com/p/CQrgisXLc9H/">
                  <a target="_blank">
                    <Image src={footer1} alt="" />
                  </a>
                </Link>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="footer-social-images-container">
                <Link href="https://www.instagram.com/p/CLCcMK3LIKB/">
                  <a target="_blank">
                    <Image src={footer2} alt="" />
                  </a>
                </Link>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="footer-social-images-container">
                {" "}
                <Link href="https://www.instagram.com/p/CGVUii5H2Wa">
                  <a target="_blank">
                    <Image src={footer3} alt="" />
                  </a>
                </Link>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="footer-social-images-container">
                <Link href="https://www.instagram.com/p/CGTCo27HpKK/">
                  <a target="_blank">
                    <Image src={footer4} alt="" />
                  </a>
                </Link>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      )}

      <footer>
        <div className="footer-copyright">
          <span>® Veciiin | All rights reserved</span>
        </div>
        <div className="footer-social">
          <Link href="https://www.instagram.com/veciiin/">
            <a target="_blank">
              <span>Instagram</span>
            </a>
          </Link>
          <Link href="https://www.facebook.com/Veciiin-Design-Studio-109665407545563">
            <a target="_blank">
              <span>Facebook</span>
            </a>
          </Link>
          <span>Pinterest</span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
