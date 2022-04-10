import React from "react";
import whiteLogo from "../images/tinder_logo_white.png";
import colorLogo from "../images/tinder-logo.png";

const Nav = ({ minimal, authToken }) => {
  return (
    <nav>
      <div className="logo-container">
        <img className="logo" src={minimal ? colorLogo : whiteLogo} />
      </div>

      {!authToken && <button className="nav-button">Entre</button>}
    </nav>
  );
};

export default Nav;
