import React from "react";
import "./MainContent.css";
import logo2 from "../images/logo512.png";

export default function MainContent({isOn}) {
    const styles = {
        color: isOn ? "white" : "black",
        border: "none",
      };

  return (
    <div className="uberNavbar-mainContent">
      <h1 style={isOn ? styles : null}>Fun facts about React</h1>
      <br />

      <section>
        <img className="main--content--logo" src={logo2} alt="main body logo" />
      </section>
      <div style={styles}>
      <ul>
          <li>Was released in 2013</li>
          <li>Was originally created by Jordan Walke</li>
          <li>Has well over 170k stars on GitHub</li>
          <li>Is maintained by Facebook</li>
          <li>Become good in React == being better JS developer...</li>
          <li>Its the most used framework / library ever</li>
          <li>Powers thousands of enterprise apps, including mobile apps.</li>
      </ul>
      </div>
    </div>
  );
}


