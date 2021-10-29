import React, {useEffect, useState} from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Bubble from "./Bubble";

const NavbarOpen = ({ active, handleActive }) => {
  const [querie, setQuerie] = useState('');
  const list = typeof window !== "undefined" && window.matchMedia('(max-width:1023px)')

  useEffect(() => {
    if (typeof window !== "undefined") {
      list.onchange = (e) => {
        if(e.matches){
          setQuerie('medium')
        }else{
          setQuerie('big')
        }
      }
    }
  },[list])

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
        <div className="navbar-links-wrapper">
          {links.map((link) => {
            return <div className="navbar-pairs">
              {link.map((element) => (
                <Link href={element.path} onClick={handleActive}>
                <a className onClick={handleActive}>
                  {router.pathname == element.path ? (
                    <div className="navlink-router">
                      <span className="numeral-link">{element.order}</span>
                      <Bubble size={querie} background="#CECF70">
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
        </div>
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
