import NavBar from "./components/NavBar";
import MainContent from "./components/MainContent";
import "./App.css";
import React, { useState } from "react";

function App() {
  const [isOn, setIsOn] = useState(false);

  function handleHandle(event) {
    setIsOn((prevValue) => !prevValue);
    if(isOn){
      document.body.style.backgroundColor = "white"
    }else{
      document.body.style.backgroundColor = "#444A61"
    }
  }

  return (
    <div>
      <NavBar isOn={isOn} handleClick={handleHandle} />
      <MainContent isOn={isOn} handleClick={handleHandle} />
    </div>
  );
}

export default App;
