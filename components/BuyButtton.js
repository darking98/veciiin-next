import React, { useEffect, useState } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import axios from "axios";
const BuyButtton = ({ item }) => {
  useEffect(() => {
    //console.log(item);
  }, [item]);
  return (
    <div>
      <PayPalScriptProvider
        options={{
          "client-id":
            "AdMfXdgoCgeGx0xRnokhIFsY2vbvHbF3NE2Y_m7UhwuHG-ZYLIg14OLNZZDBW61sER8IJLJIObIwF2Ji",
        }}
      >
        <PayPalButtons
          forceReRender={[item]}
          createOrder={async () => {
            try {
              const res = await axios({
                url: "http://localhost:3000/api/payment",
                method: "POST",
                headers: {
                  Accept: "application/json",
                  "Content-Type": "application/json",
                },
                data: JSON.stringify(item),
              });
              return res.data.id;
            } catch (error) {
              console.log(error);
            }
          }}
          onApprove={(data, actions) => {
            console.log(data);
            actions.order.capture();
          }}
          style={{ layout: "vertical", color: "blue" }}
        />
      </PayPalScriptProvider>
    </div>
  );
};

export default BuyButtton;
