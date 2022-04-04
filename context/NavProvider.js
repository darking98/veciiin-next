import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
export const NavbarContext = React.createContext();

const NavProvider = ({ children }) => {
  const router = useRouter();
  const [navColor, setNavColor] = useState();
  const [navBackground, setNavBackground] = useState();
  const [open, setOpen] = useState(false);
  const [cart, setCart] = useState([]);
  const red = "#4B0705";
  const white = "#f5ede7";
  const colors = {
    red,
    white,
  };

  const useNavColor = (color) => {
    useEffect(() => {
      if (open) {
        setNavColor(colors.red);
      } else {
        setNavColor(color);
      }
    }, [color, open]);
    return navColor;
  };

  useEffect(() => {
    if (
      router.pathname === "/" ||
      router.pathname === "/product/[category]/[id]"
    ) {
      setNavBackground("#F7F3F0");
    } else {
      setNavBackground("");
    }
  }, [router.pathname]);

  const handleOpenNavbar = () => {
    setOpen(!open);
  };

  const handleCart = (product) => {
    const productFound = cart.find((element) => element.id == product.id)
    if (productFound) {
      //setCart(cart.map())
      productFound.amount = productFound.amount + product.amount
      //productFound.map(_product => ({..._product, amount:_product.amount +=product.amount}))
      //productFound.amount += product.amount;
      //productFound.total = productFound.amount * productFound.price;
    } else {
      setCart([...cart, product]);
    }
    window.localStorage.setItem("products", JSON.stringify(cart));
  };

  const removeFromCart = (product) => {
    setCart(cart.filter((element) => element.id !== product.id));
  };

  const handleAddOrRemoveAmount = (product, action) => {
    const productFound = cart.find((element) => element.id == product.id);
    if (action === "+") {
      productFound.amount = productFound.amount + 1;
      productFound.total = productFound.amount * productFound.price;
    } else if (action === "-") {
      if (productFound.amount === 1) {
        removeFromCart(product);
      } else {
        productFound.amount = productFound.amount - 1;
        productFound.total = productFound.amount * productFound.price;
      }
    }
  };

  return (
    <NavbarContext.Provider
      value={{
        useNavColor,
        colors,
        navColor,
        handleOpenNavbar,
        open,
        cart,
        handleCart,
        setNavBackground,
        navBackground,
        removeFromCart,
        handleAddOrRemoveAmount,
      }}
    >
      {children}
    </NavbarContext.Provider>
  );
};

export default NavProvider;
