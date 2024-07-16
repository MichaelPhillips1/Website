import React from "react";
import ReactDOM from "react-dom/client";
import "./css/index.css";
import WavesBackground from "./js/WavesBackground";

const root = ReactDOM.createRoot(document.getElementById("root"));

setTimeout(() => {
  document.getElementById('headerText').style.animation = 'headerTextToTop 1s';
  setTimeout(() => {
    document.getElementById('headerText').style.fontSize = '3rem';
    document.getElementById('headerText').style.marginTop = '10vh';
  }, 950);
}, 5000);

root.render(
  <React.StrictMode>
    <WavesBackground />
    <div id='headerText'>Design That Excites.</div>
  </React.StrictMode>,
  document.getElementById('root')
);
