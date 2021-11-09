import React, { useContext } from "react";
import NavbarOpen from "./NavbarOpen";
//import Bubble from "./Bubble";
import { NavbarContext } from "../context/NavProvider";
//import { Link } from "react-router-dom";
import Bubble from "./Bubble";
import Link from "next/link";
import BubbleNav from "./BubbleNav";
const Navbar = () => {
  const { navColor, handleOpenNavbar, open } = useContext(NavbarContext);

  return (
    <>
      <nav className="navbar">
        <div className="bubble-container">
          <BubbleNav border={navColor}>Let's Chat!</BubbleNav>
        </div>
        <div className="navbar-title">
          <Link href="/">
            <a>
              <svg
                id="Grupo_74"
                data-name="Grupo 74"
                xmlns="http://www.w3.org/2000/svg"
                width="89.779"
                height="19.028"
                viewBox="0 0 89.779 19.028"
              >
                <g
                  id="Grupo_15"
                  data-name="Grupo 15"
                  transform="translate(0 0)"
                >
                  <path
                    id="Trazado_22"
                    data-name="Trazado 22"
                    d="M261.18,507.294l-.019.048-5.618,14.519-6.1-14.519h0v-.048H252.7v.048h0l4.314,10.546,4.076-10.546.021-.048Z"
                    transform="translate(-249.445 -502.833)"
                    fill={navColor}
                  />
                  <path
                    id="Trazado_23"
                    data-name="Trazado 23"
                    d="M361.534,515.349c-.312,3.088-2.809,5.073-6.206,5.073-4.811,0-7.9-3.264-7.9-7.2,0-4.18,3.158-7.587,7.95-7.587a6.428,6.428,0,0,1,4.679,1.841,5.992,5.992,0,0,1,1.351,2.041h0l.013.04h0l.013.04-10.617,3.324a13.1,13.1,0,0,0,.444,3.274c1.359,4.507,9.622,4.65,10.206-.841Zm-10.711-2.522,7.662-2.4c-.005-2.093-.389-4.751-3.488-4.751-3.017,0-4.036,3.857-4.163,6.284l-.023.127C350.811,512.342,350.816,512.587,350.822,512.827Z"
                    transform="translate(-332.293 -501.426)"
                    fill={navColor}
                  />
                  <path
                    id="Trazado_24"
                    data-name="Trazado 24"
                    d="M481.008,515.349c-.312,3.088-2.809,5.073-6.206,5.073-4.811,0-7.9-3.264-7.9-7.2,0-4.18,3.157-7.587,7.95-7.587a6.428,6.428,0,0,1,4.679,1.841l-1.577,3.013v-.008c0-2.1-.366-4.8-3.488-4.8-3.017,0-4.036,3.857-4.163,6.284l-.023.127a14.733,14.733,0,0,0,.458,4.1c1.359,4.507,9.621,4.65,10.206-.841Z"
                    transform="translate(-433.309 -501.426)"
                    fill={navColor}
                  />
                  <path
                    id="Trazado_25"
                    data-name="Trazado 25"
                    d="M585.3,480.012a1.593,1.593,0,1,1,1.593,1.592A1.593,1.593,0,0,1,585.3,480.012Zm.119,5.142,2.981-2.22v14.206h-3.013V485.183Zm2.981-2.288h.028l-.028.02Z"
                    transform="translate(-533.413 -478.419)"
                    fill={navColor}
                  />
                  <path
                    id="Trazado_26"
                    data-name="Trazado 26"
                    d="M636.871,480.012a1.593,1.593,0,1,1,1.593,1.592A1.593,1.593,0,0,1,636.871,480.012Zm.118,5.142,2.981-2.22v14.206h-3.013V485.183Zm2.981-2.288H640l-.028.02Z"
                    transform="translate(-577.015 -478.419)"
                    fill={navColor}
                  />
                  <path
                    id="Trazado_27"
                    data-name="Trazado 27"
                    d="M688.44,480.012a1.593,1.593,0,1,1,1.593,1.592A1.593,1.593,0,0,1,688.44,480.012Zm.118,5.142,2.981-2.22v14.206h-3.013V485.183Zm2.981-2.288h.028l-.028.02Z"
                    transform="translate(-620.617 -478.419)"
                    fill={navColor}
                  />
                  <path
                    id="Trazado_28"
                    data-name="Trazado 28"
                    d="M755.818,510.344v9.771h0v.048h-3.007v-.048h0V509.762c0-1.984-.641-3.925-2.646-3.925a5.831,5.831,0,0,0-3.6,1.988,9.538,9.538,0,0,0-1.395,2.052v10.285h-3.01V508.124h0l3-2.236h.008v3.905a6.925,6.925,0,0,1,5.949-4.164A4.553,4.553,0,0,1,754.662,507,4.746,4.746,0,0,1,755.818,510.344Z"
                    transform="translate(-666.038 -501.426)"
                    fill={navColor}
                  />
                </g>
              </svg>
            </a>
          </Link>
        </div>
        <div className="hamburger-container">
          <div
            className={open ? "hamburger-nav hamburger-open" : "hamburger-nav"}
            onClick={handleOpenNavbar}
          >
            <div
              className="hamburger-bar"
              style={{ backgroundColor: navColor }}
            ></div>
            <div
              className="hamburger-bar"
              style={{ backgroundColor: navColor }}
            ></div>
          </div>
        </div>
      </nav>
      <NavbarOpen active={open} handleActive={handleOpenNavbar} />
    </>
  );
};

export default Navbar;
