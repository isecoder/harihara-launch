import React from "react";
import harihareshwaraImage from "../assets/harihareshwara.jpg";
import omSymbolImage from "../assets/Om.png";
import "./Header.css";

const Header = () => {
  return (
    <header className="banner">
      <div className="header-left">
        <img
          src={harihareshwaraImage}
          alt="Harihareshwara deity"
          className="god-image"
        />
      </div>
      <div className="header-center">
        <div className="gov-info">
          <span>Government of Karnataka</span>
          <span>
            Hindu Religious Institutions & Charitable Endowments Department
          </span>
        </div>
        <div className="temple-info">
          <h1>Shri Harihareshwara Temple</h1>
          <p>Hariharapallathadka, Dakshina Kannada - 574218</p>
        </div>
      </div>
      <div className="header-right">
        <img src={omSymbolImage} alt="Om Symbol" className="om-symbol" />
      </div>
    </header>
  );
};

export default Header;
