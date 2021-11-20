import React from "react";
import logo from "../images/logo192.png";
import "./NavBar.css";

export default function NavBar({ isOn, handleClick }) {
  console.log(isOn);
  const styles = {
    color: "white",
    backgroundColor: "#44A81",
    border: "none"
  };

  return (
    <div style={isOn ? styles : null} className="uberNavbar">
      <div className="navbar--left">
        <img src={logo} alt="awesome logo" />
        <h2 className="react--header--logo">ReactFacts</h2>
      </div>
      <div className="navbar--right">
        <p className="lightText">Light</p>
        <label className="switch">
          <input
            type="checkbox"
            name="isOn"
            onClick={handleClick}
          />
          <span className="slider round"></span>
        </label>
        <p className="lightText">Dark</p>
      </div>
      {/* button */}
    </div>
  );
}
