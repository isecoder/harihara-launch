import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="banner">
      <div className="header-left">
        <img src='../assets/harihareshwara.jpg' alt="God Image" className="god-image" />
      </div>
      <div className="header-center">
        <div className="gov-info">
          <span>Government of Karnataka</span>
          <span>Hindu Religious Institutions & Charitable Endowments Department</span>
        </div>
        <div className="temple-info">
          <h1>Shri Harihareshwara Temple</h1>
          <p>Hariharapallathadka, Dakshina Kannada - 574218</p>
        </div>
      </div>
      <div className="header-right">
        <img src="C:\Users\shree\Downloads\Harihara-Client\src\assets\Om.png" alt="Om Symbol" className="om-symbol" />
      </div>
    </header>
  );
};

export default Header;
