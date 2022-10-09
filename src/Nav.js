import React, { useState, useEffect } from "react";
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);
  const transitionVavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionVavBar);
    return () => window.removeEventListener("scroll", transitionVavBar);
  }, []);
  return (
    <div className={`nav ${show && "nav__black"}`}>
      <div className="nav__content">
        <img className="nav__logo" src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="" />
        <img className="nav__avatar" src="https://cdn.iconscout.com/icon/free/png-256/account-269-866236.png" alt="" />
      </div>
    </div>
  );
}

export default Nav;
