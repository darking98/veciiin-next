import React from "react";

const Bubble = ({ children, size }) => {
  return (
    <div className="bubble">
      <div>{children}</div>
      {size === "big" ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="209"
          height="134.235"
          viewBox="0 0 209 134.235"
        >
          <path
            id="Trazado_191"
            data-name="Trazado 191"
            d="M101.4,1.078c56.426,7.681,101.4,27.082,101.4,60.489s-45.341,70.77-101.4,60.489S0,94.974,0,61.567,44.973-6.6,101.4,1.078Z"
            transform="matrix(0.999, -0.052, 0.052, 0.999, 0, 10.614)"
            fill="#cecf70"
          />
        </svg>
      ) : size === "medium" ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="122.268"
          height="81.581"
          viewBox="0 0 122.268 81.581"
        >
          <path
            id="Trazado_173"
            data-name="Trazado 173"
            d="M59.24.657c32.966,4.684,59.24,16.514,59.24,36.884S91.99,80.694,59.24,74.425,0,57.912,0,37.541,26.274-4.027,59.24.657Z"
            transform="matrix(0.999, -0.052, 0.052, 0.999, 0, 6.201)"
            fill="#cecf70"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="71.762"
          height="57.081"
          viewBox="0 0 71.762 57.081"
        >
          <path
            id="Trazado_168"
            data-name="Trazado 168"
            d="M35.881.1C55.848,3.638,71.762,12.584,71.762,27.988S55.717,60.621,35.881,55.88,0,43.392,0,27.988,15.914-3.446,35.881.1Z"
            transform="translate(0 0.401)"
            fill="#cecf70"
          />
        </svg>
      )}
    </div>
  );
};

export default Bubble;
