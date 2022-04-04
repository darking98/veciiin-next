import React, { useContext, useState, useRef, useEffect } from "react";
import { NavbarContext } from "../../context/NavProvider";
import Image from "next/image";
import arrow from "../../images/Arrow.svg";
import products from "../../products/products";
import Link from "next/link";
import axios from "axios";
import Papa from "papaparse";
const index = ({ nuevo }) => {
  const { useNavColor, colors } = useContext(NavbarContext);
  const [mouse, setMouse] = useState(colors.white);
  const myRef = useRef(null);
  const executeScroll = () => myRef.current.scrollIntoView();
  useNavColor(mouse);

  const { glass, books, sculpture, services } = products;
  console.log(nuevo);

  return (
    <>
      <div className="shop-hero">
        <div className="arrow" onClick={executeScroll}>
          <Image src={arrow} />
        </div>
        <div className="shop-hero_info">
          <span>Elevate your space</span>
          <div className="shop-hero_title">
            <h3>{`Shop the\nCollection`}</h3>
          </div>
        </div>
      </div>
      <div className="shop-header-products">
        <h3>Blown Glass Collection</h3>
      </div>
      <div className="shop-grid-container-3-1" ref={myRef}>
        {glass.map((element) => (
          <div className="shop-grid-item">
            <div className="shop-grid-item_image">
              <Image src={element.image} />
            </div>
            <div className="shop-grid-item_info">
              <div>
                <div className="shop-grid-item_title">
                  <h5>{element.title}</h5>
                </div>
                <div className="shop-grid-item_description">
                  <p>{element.description}</p>
                </div>
              </div>
              <div className="shop-grid-item_link">
                <Link href={`/shop/glass/${element.id}`}>
                  <a>
                    <span>Shop Now</span>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="shop-header-products">
        <h3>Assouline Books Travel Collection</h3>
      </div>
      <div className="shop-grid-container-3-2">
        {books.map((element) => (
          <div className="shop-grid-item">
            <div className="shop-grid-item_image">
              <Image src={element.image} />
            </div>
            <div className="shop-grid-item_info">
              <div>
                <div className="shop-grid-item_title">
                  <h5>{element.title}</h5>
                </div>
                <div className="shop-grid-item_description">
                  <p>
                    {element.currency} {element.price}
                  </p>
                </div>
              </div>
              <div className="shop-grid-item_link">
                <Link href={`/shop/books/${element.id}`}>
                  <a>
                    <span>Shop Now</span>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="shop-header-products">
        <h3>Veciiin Sculpture Collection</h3>
      </div>
      <div className="shop-grid-container-2">
        {sculpture.map((element) => (
          <div className="shop-grid-item">
            <div className="shop-grid-item_image">
              <Image src={element.image} />
            </div>
            <div className="shop-grid-item_info">
              <div>
                <div className="shop-grid-item_title">
                  <h5>{element.title}</h5>
                </div>
                <div className="shop-grid-item_description">
                  <p>
                    {element.currency} {element.price}
                  </p>
                </div>
              </div>
              <div className="shop-grid-item_link">
                <Link href={`/shop/sculpture/${element.id}`}>
                  <a>
                    <span>Shop Now</span>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="shop-header-products">
        <h3>Our Services</h3>
      </div>
      <div className="shop-grid-container-3-2">
        {services.map((element) => (
          <div className="shop-grid-item">
            <div className="shop-grid-item_image">
              <Image src={element.image} />
            </div>
            <div className="shop-grid-item_info">
              <div>
                <div className="shop-grid-item_title">
                  <h5>{element.title}</h5>
                </div>
                <div className="shop-grid-item_description">
                  <p>
                    {element.currency} {element.price}
                  </p>
                </div>
              </div>
              <div className="shop-grid-item_link">
                <Link href={`/shop/services/${element.id}`}>
                  <a>
                    <span>Shop Now</span>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export async function getStaticProps() {
  const productos = await axios
    .get(
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vS-qFZU4VukvC4tKslBShf5ufjqW2LC3W6TsMXwk4C6OnDKMiDKKwpQ-sRjBTBCsYlPb4PmdLkSXRh9/pub?gid=0&single=true&output=csv",
      {
        responseType: "blob",
      }
    )
    .then((res) =>
      Papa.parse(res.data, {
        header: true,
        complete: (result) => {
          console.log(result);
          return result;
        },
        error: (error) => {
          return error.message;
        },
      })
    );
  const nuevo = JSON.stringify(productos);
  return {
    props: { nuevo }, // will be passed to the page component as props
  };
}

export default index;
