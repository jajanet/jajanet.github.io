import React from "react";
import "./styles.css";
import About from "./About.js";
import Footer from "./Footer.js";
import Links from "./Links.js";
import Header from "./Header.js";
import ImgChangeLogic from "./ImgChangeLogic.js";

const App = () => (
  <div className="container">
    <ImgChangeLogic />
    <Header />
    <About />
    <Links />
    <Footer />
  </div>
);

/**
 setBgIdx(bgIdx => (bgIdx + 1) % 2);
 document.getElementsByClassName("App")[0].setAttribute('style', 'background-image: url(' + bg[bgIdx] + ')');
 */

export default App;

// onClick={() => {
//   clearInterval(interval);
//   console.log(6);

//   //   setBgIdx(bgIdx => (bgIdx + 1) % 2);
//   //   document
//   //     .getElementsByClassName("App")[0]
//   //     .setAttribute(
//   //       "style",
//   //       "background-image: url(" + bgs[bgIdx] + ")"
//   //     );
// }}
