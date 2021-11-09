import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Bubble from "./Bubble";
import useWindowDimensions from "../hooks/useWindowsDimensions";
const NavbarOpen = ({ active, handleActive }) => {
  const { height, width } = useWindowDimensions();
  const router = useRouter();
  const links = [
    [
      {
        title: "Home",
        order: "01",
        path: "/",
      },
      {
        title: "About",
        order: "02",
        path: "/about",
      },
    ],
    [
      {
        title: "Services",
        order: "03",
        path: "/services",
      },

      {
        title: "Projects",
        order: "04",
        path: "/projects",
      },
    ],
    [
      {
        title: "Quiz",
        order: "05",
        path: "/quiz",
      },
      {
        title: "Contact",
        order: "06",
        path: "/contact",
      },
    ],
  ];
  return (
    <div className={active ? "navbar-open nav-transititon" : "navbar-open"}>
      <div className="navbar-open-container">
        <div className="navbar-links-wrapper">
          {links.map((link) => {
            return (
              <div className="navbar-pairs">
                {link.map((element) => (
                  <div>
                    <Link href={element.path} onClick={handleActive}>
                      <a className onClick={handleActive}>
                        {router.pathname == element.path ? (
                          <div className="navlink-router">
                            <span className="numeral-link">
                              {element.order}
                            </span>
                            <Bubble
                              size={width > 1001 ? "big" : "medium"}
                              background="#CECF70"
                            >
                              {element.title}
                            </Bubble>
                          </div>
                        ) : (
                          <>
                            <span className="numeral-link">
                              {element.order}
                            </span>
                            <div className="title-link">{element.title}</div>
                          </>
                        )}
                      </a>
                    </Link>
                  </div>
                ))}
              </div>
            );
          })}
        </div>
        <div className="navbar-social">
          <div className="navbar-social-links">
            <Link href="https://instagram.com">
              <a>
                <span>Instagram</span>
              </a>
            </Link>
            <Link href="https://facebook.com">
              <a>
                <span>Facebook</span>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarOpen;
