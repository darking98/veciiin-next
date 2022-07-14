import React, { useEffect, useState, useContext } from "react";
import { useRouter } from "next/router";
import products from "../../../products/products";
import Image from "next/dist/client/image";
import Spinner from "../../../components/Spinner";
import { NavbarContext } from "../../../context/NavProvider";
import Bubble from "../../../components/Bubble";
import BuyButtton from "../../../components/BuyButtton";
import Alert from "../../../components/Alert";
import Collapsible from "react-collapsible";

const Product = () => {
  const router = useRouter();
  const { id, category } = router.query;
  const { cart, handleCart, useNavColor, colors } = useContext(NavbarContext);
  const [product, setProduct] = useState();
  const [amount, setAmount] = useState(1);
  const [productQueue, setProductQueue] = useState([]);

  useNavColor(colors.red);

  useEffect(() => {
    if (category) {
      const foundProduct = products[category].find(
        (element) => element.id == id
      );

      setProduct({
        ...foundProduct,
        amount,
        total: foundProduct.price * amount,
        singleProduct: true,
      });
    }
  }, [id, amount, cart]);

  const handleAddCart = () => {
    handleCart(product);
    setProductQueue([...productQueue, product]);
  };

  const CollapsibleHeader = ({text}) => {
    const [open, setOpen] = useState(false)
    return(
    <div className="collapsible-header" onClick={() => setOpen(!open)}>
      <p>{text}</p>
      <p>{open ? '-' : '+'}</p>
    </div>
    )
  }

  return (
    <>
      {!product ? (
        <Spinner />
      ) : (
        <div className="product-wrapper">
          <div className="product-image">
            <Image src={product.detailImage} />
          </div>
          <div className="product-info">
            <h3>{product.title}</h3>
            <p className="product-price">
              {product.currency} {product.price}
            </p>
            <p className="product-description" dangerouslySetInnerHTML={{__html:product.description}}>
            </p>
            <div className="product-cart-container">
              <div style={{ display: "flex" }}>
                <div className="product-cart-handle">
                  <p onClick={() => amount > 1 && setAmount(amount - 1)}>-</p>
                  <span>{amount}</span>
                  <p onClick={() => setAmount(amount + 1)}>+</p>
                </div>
                <div>
                  <div className="container" onClick={handleAddCart}>
                    <Bubble background={"#CECF70"}>Add to cart</Bubble>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-general">
              <Collapsible
                overflowWhenOpen={"visible"}
                trigger={
                  <CollapsibleHeader text={'General Information'}/>
                    
                }
              >
               <span>{product.generalInformation ? product.generalInformation : "Here comes the General Information of the product."}</span>
              </Collapsible>
              <Collapsible
                overflowWhenOpen={"visible"}
                trigger={
                  <CollapsibleHeader text={'Product Delivery'}/>
                    
                }
              >
                <span>3 weeks production + Shipping.</span>
              </Collapsible>
            </div>
          </div>
        </div>
      )}
      {productQueue &&
        productQueue.map((element, idx) => (
          <Alert
            key={idx}
            text={element && element.title}
            active={true}
            amount={amount}
          />
        ))}
    </>
  );
};

export default Product;
