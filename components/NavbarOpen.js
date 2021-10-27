import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Bubble from "./Bubble";

const NavbarOpen = ({ active, handleActive }) => {
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
        title: "Shop",
        order: "05",
        path: "/shop",
      },

      {
        title: "Quiz",
        order: "06",
        path: "/quiz",
      },
    ],
    [
      {
        title: "Contact",
        order: "07",
        path: "/contact",
      },
    ],
  ];
  return (
    <div className={active ? "navbar-open nav-transititon" : "navbar-open"}>
      <div className="navbar-open-container">
        {/*<div className="navbar-container">*/}

        <div className="navbar-links-wrapper">
          {links.map((link, index) => {
            return <div className="navbar-pairs">
              {link.map((element) => (
                <Link href={element.path} onClick={handleActive}>
                <a className onClick={handleActive}>
                  {router.pathname == element.path ? (
                    <div className="navlink-router">
                      <span className="numeral-link">{element.order}</span>
                      <Bubble size="medium" background="#CECF70">
                        {element.title}
                      </Bubble>
                    </div>
                  ) : (
                    <>
                      <span className="numeral-link">{element.order}</span>
                      <div className="title-link">{element.title}</div>
                    </>
                  )}
                </a>
              </Link>
              ))}
            </div>;
          })}
          {/*links.map((link) => {
            return (
              link.order % 2 !== 0 && (
                <Link href={link.path} onClick={handleActive}>
                  <a className onClick={handleActive}>
                    {router.pathname == link.path ? (
                      <div className="navlink-router">
                        <span className="numeral-link">{link.order}</span>
                        <Bubble size="medium" background="#CECF70">
                          {link.title}
                        </Bubble>
                      </div>
                    ) : (
                      <>
                        <span className="numeral-link">{link.order}</span>
                        <div className="title-link">{link.title}</div>
                      </>
                    )}
                  </a>
                </Link>
              )
            );
          })*/}
        </div>
        {/*</div>*/}

        <div className="navbar-social">
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
  );
};

export default NavbarOpen;
