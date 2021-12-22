import React from "react";

const Bubble = ({ children, size }) => {
  return (
    <div className="bubble">
      <div className={!size && 'small-bubble'}>{children}</div>
      {size === "big" ? (
        <div className="svg-container">
          <svg
            width="110"
            height="84"
            viewBox="0 0 110 84"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M36.7609 7.80983C67.532 -3.00183 96.0259 -4.15491 106.021 14.643C116.016 33.441 104.317 66.628 72.9557 75.8824C41.5945 85.1369 13.6907 87.8472 3.69569 69.0492C-6.29936 50.2513 5.99219 18.6259 36.7609 7.80983Z"
              fill="#CECF70"
            />
          </svg>
        </div>
      ) : size === "medium" ? (
        <div className="svg-container">
          <svg
            width="70"
            height="55"
            viewBox="0 0 70 55"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22.9844 4.33712C42.2566 -2.15383 60.3033 -2.27518 67.0685 10.4483C73.8337 23.1718 67.1649 44.97 47.4831 50.4124C27.8013 55.8547 10.1642 57.0247 3.39901 44.3012C-3.36619 31.5777 3.71379 10.8311 22.9844 4.33712Z"
              fill="#CECF70"
            />
          </svg>
        </div>
      ) : (
        <svg
          width="85"
          height="63"
          viewBox="0 0 85 63"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M42.343 0.54049C65.905 4.39349 84.686 14.1255 84.686 30.8835C84.686 47.6415 65.752 66.3835 42.343 61.2275C18.934 56.0715 0 47.6415 0 30.8835C0 14.1255 18.78 -3.31251 42.343 0.54049Z"
            fill="#CECF70"
          />
        </svg>
      )}
    </div>
  );
};

export default Bubble;
