import React, { useContext, useState, useRef } from "react";
import { NavbarContext } from "../../context/NavProvider";
import Image from "next/image";
import botella from "../../images/shop/botella.png";
import copa from "../../images/shop/copa.png";
import vaso from "../../images/shop/vaso.png";
import productos from "../../images/shop/productos.png";
import firma from "../../images/shop/firma.svg";
import producto1 from '../../images/shop/producto1.png'
import producto2 from '../../images/shop/producto2.png'
import producto3 from '../../images/shop/producto3.png'
import producto4 from '../../images/shop/producto4.png'
import producto5 from '../../images/shop/producto5.png'
import producto6 from '../../images/shop/producto6.png'
import arrow from '../../images/Arrow.svg'
const index = () => {
  const { useNavColor, colors } = useContext(NavbarContext);
  const [mouse, setMouse] = useState(colors.white);
  const myRef = useRef(null);
  const executeScroll = () => myRef.current.scrollIntoView();

  useNavColor(mouse);
  return (
    <>
      <div className="shop-hero">
        <div className="arrow" onClick={executeScroll}>
          <Image src={arrow}/>
        </div>
        <div className="shop-hero_info">
          <span>Elevate your space</span>
          <div className="shop-hero_title">
            <h3>{`Shop the\nCollection`}</h3>
          </div>
        </div>
      </div>
      <div className="shop-grid-container" ref={myRef}>
        <div className="shop-grid-item">
          <Image src={copa} />
          <div className="shop-grid-item_info">
            <div>
              <div className="shop-grid-item_title">
                <h5>Copa Bocas</h5>
              </div>
              <div className="shop-grid-item_description">
                <p>Esta es una pequeña descripción del producto.</p>
              </div>
            </div>
            <div className="shop-grid-item_link">
              <span>Shop Now</span>
            </div>
          </div>
        </div>
        <div className="shop-grid-item">
          <Image src={vaso} />
          <div className="shop-grid-item_info">
            <div>
              <div className="shop-grid-item_title">
                <h5>Vaso Bocas</h5>
              </div>
              <div className="shop-grid-item_description">
                <p>Esta es una pequeña descripción del producto.</p>
              </div>
            </div>
            <div className="shop-grid-item_link">
              <span>Shop Now</span>
            </div>
          </div>
        </div>
        <div className="shop-grid-item">
          <Image src={botella} />
          <div className="shop-grid-item_info">
            <div>
              <div className="shop-grid-item_title">
                <h5>Botella Bocas</h5>
              </div>
              <div className="shop-grid-item_description">
                <p>Esta es una pequeña descripción del producto.</p>
              </div>
            </div>

            <div className="shop-grid-item_link">
              <span>Shop Now</span>
            </div>
          </div>
        </div>
      </div>
      <div className="shop-collection">
        <div className="shop-collection-info">
          <div className="shop-collection-info_header">
            <div>
              <h3>The</h3>
              <Image src={firma} />
            </div>
            <h3>Collection</h3>
          </div>
          <div className="shop-collection-info_description">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
        <div className="shop-collection-image">
          <Image src={productos} />
        </div>
      </div>
      <div className="shop-grid-container">
        <div className="shop-grid-item">
          <Image src={producto1} />
          <div className="shop-grid-item_info">
            <div>
              <div className="shop-grid-item_title">
                <h5>Copa Bocas</h5>
              </div>
              <div className="shop-grid-item_description">
                <p>Esta es una pequeña descripción del producto.</p>
              </div>
            </div>
            <div className="shop-grid-item_link">
              <span>Shop Now</span>
            </div>
          </div>
        </div>
        <div className="shop-grid-item">
          <Image src={producto2} />
          <div className="shop-grid-item_info">
            <div>
              <div className="shop-grid-item_title">
                <h5>Copa Bocas</h5>
              </div>
              <div className="shop-grid-item_description">
                <p>Esta es una pequeña descripción del producto.</p>
              </div>
            </div>
            <div className="shop-grid-item_link">
              <span>Shop Now</span>
            </div>
          </div>
        </div>
        <div className="shop-grid-item">
          <Image src={producto3} />
          <div className="shop-grid-item_info">
            <div>
              <div className="shop-grid-item_title">
                <h5>Copa Bocas</h5>
              </div>
              <div className="shop-grid-item_description">
                <p>Esta es una pequeña descripción del producto.</p>
              </div>
            </div>
            <div className="shop-grid-item_link">
              <span>Shop Now</span>
            </div>
          </div>
        </div>
        <div className="shop-grid-item">
          <Image src={producto4} />
          <div className="shop-grid-item_info">
            <div>
              <div className="shop-grid-item_title">
                <h5>Copa Bocas</h5>
              </div>
              <div className="shop-grid-item_description">
                <p>Esta es una pequeña descripción del producto.</p>
              </div>
            </div>
            <div className="shop-grid-item_link">
              <span>Shop Now</span>
            </div>
          </div>
        </div>
        <div className="shop-grid-item">
          <Image src={producto5} />
          <div className="shop-grid-item_info">
            <div>
              <div className="shop-grid-item_title">
                <h5>Vaso Bocas</h5>
              </div>
              <div className="shop-grid-item_description">
                <p>Esta es una pequeña descripción del producto.</p>
              </div>
            </div>
            <div className="shop-grid-item_link">
              <span>Shop Now</span>
            </div>
          </div>
        </div>
        <div className="shop-grid-item">
          <Image src={producto6} />
          <div className="shop-grid-item_info">
            <div>
              <div className="shop-grid-item_title">
                <h5>Botella Bocas</h5>
              </div>
              <div className="shop-grid-item_description">
                <p>Esta es una pequeña descripción del producto.</p>
              </div>
            </div>

            <div className="shop-grid-item_link">
              <span>Shop Now</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
