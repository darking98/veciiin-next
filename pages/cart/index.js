import React, { useContext, useEffect, useState } from "react";
import { NavbarContext } from "../../context/NavProvider";
import Image from "next/dist/client/image";
import Link from "next/link";
import BuyButtton from "../../components/BuyButtton";
const index = () => {
  const { cart, removeFromCart, handleAddOrRemoveAmount, useNavColor, colors } =
    useContext(NavbarContext);
  useNavColor(colors.red);

  const cartTotal = () => {
    return cart.reduce((sum, p) => sum + p.total, 0);
  };
  const [products, setProducts] = useState();
  const [number, setNumber] = useState(0);

  useEffect(() => {
    setProducts({items:[...cart], totalProducts:{total:cartTotal()}})
  },[cart])

  const handleAmount = (product, action) => {
    handleAddOrRemoveAmount(product, action);
    setNumber(number+1);
  };

  return (
    <div className="cart">
      {cart.length >= 1 ? (
        <div className="table-container">

        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {cart.map((product) => (
              <tr>
                <td className="td-title">
                  <Image
                    src={product.detailImage.src}
                    height="200px"
                    width="200px"
                  />
                  {product.title}
                </td>
                <td style={{ fontWeight: "600" }}>
                  {product.currency}
                  {product.total}
                </td>
                <td>
                  <div className="td-amount">
                    <p onClick={() => handleAmount(product, "-")}>-</p>
                    {product.amount}
                    <p onClick={() => handleAmount(product, "+")}>+</p>
                  </div>
                </td>
                <td className="td-remove">
                  <p onClick={() => removeFromCart(product)}>Remove</p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>

      ) : (
        <div className="cart-empty">
          <p>Cart is empty.</p>
          <Link href="/shop">
            <a>Go Shopping.</a>
          </Link>
        </div>
      )}

      <div className="cart-total">
        <p>Cart total</p>
        <p className="cart-total-value">U$D {cartTotal()}</p>
        <BuyButtton item={products}/>
      </div>
    </div>
  );
};

export default index;
