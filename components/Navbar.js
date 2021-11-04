import React, { useContext } from "react";
import NavbarOpen from "./NavbarOpen";
//import Bubble from "./Bubble";
import { NavbarContext } from "../context/NavProvider";
//import { Link } from "react-router-dom";
import Bubble from './Bubble'
import Link from 'next/link'
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
              <h2 style={{ color: navColor }}>Veciiin</h2>
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
            style={{ backgroundColor: navColor}}
          ></div>
          <div
            className="hamburger-bar"
            style={{ backgroundColor: navColor }}
          ></div>
        </div>
        </div>

      </nav>
      <NavbarOpen active={open} handleActive ={handleOpenNavbar}/>
    </>
  );
};

export default Navbar;
