import React from "react";
import "./styles.css";
import About from "./About.js";
import Footer from "./Footer.js";
import Links from "./Links.js";
import Header from "./Header.js";
import ImgChangeLogic from "./ImgChangeLogic.js";

const Root = () => (
  <div className="container">
    <ImgChangeLogic />
    <Header />
    <About />
    <Links />
    <Footer />
  </div>
);

export default Root;
