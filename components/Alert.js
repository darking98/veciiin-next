import React from "react";
import { BsCheckCircle } from "react-icons/bs";

const Alert = ({ text, active, amount }) => {
  return (
    <div className={active ? 'product-added cart-added' : 'product-added'}>
      <div className="product-added-container">
          <div>
              <BsCheckCircle />
          </div>
          <div>
            <p className="success-text">Success!</p>
            <p>Added {text} x {amount} to cart!</p>
          </div>
      </div>
    </div>
  );
};

export default Alert;
