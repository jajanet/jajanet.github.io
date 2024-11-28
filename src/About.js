import React, {Fragment} from "react";
import ToggleText from "./ToggleText.js";
import {IconRow} from "./SvgIcon.js"

const About = () => {
  return (
    <Fragment>
      <div className="content">
        Hi, I'm Janet :) I'm a first generation Vietnamese-American, born and raised in 
          <ToggleText before=" Michigan" after=" the Grand Rapids Michigan area"/>! 〽️
          <br /><br />
          I'm a Software Engineer, working on
          <a className="regular-link" href="https://checks.google.com/" target="_blank" rel="noopener noreferrer"> Google's Area120 Checks</a> product ✅
          <IconRow />
        <ToggleText
          hidden={
            <Fragment>
        I'm particularly interested in infrastructure and the cloud ☁️ but also open to anything innovative! I'm especially passionate
        for anything that is open-source or promotes
        <ToggleText
          before=" social good" after=" social good, namely education, sustainability, and income equality"
        /> ⚖️ 
        <br /><br />
        if you wanna work together, find me any of the links at the bottom! 📬
        <IconRow />
        I've generally worked on and like 
        <ToggleText before=" all parts of the stack" after=" infrastructure, backend, frontend"/> — using
          tools and technologies such as various cloud providers, CI/CD, React/Angular 💻 🌐
              <br /><br />
              As a
			        <ToggleText
                before=" lifelong technology lover, "
                after=" lifelong technology lover, I started creating HTML/CSS webpages and MS Paint
			  		graphics on Neopets as a creative outlet at the age of 10 🎨 🖌️ With that, "
              />
			  this field always made the most sense for me. Learning and collaborating with people is so fun too!! 😛 👯 🧑‍🤝‍🧑
              <IconRow />
              Outside of computers, my hobbies include: health 🍎, fitness 💪, cooking 🔪, thrifting ♻️,
              playing
              <ToggleText before=" video games 🎮" after=" video games (mostly any Pokemon game 🐉 lol)"/>
              <IconRow />
              Some other things that I like too much include animals (especially my rat terrier chihuahua 🐶) 🐾, fanny packs, and Crocs 🐊
            <br/>
            <br/>
            <br/>
            </Fragment>
          }
          before="(show more)"
          after="(show less)"
        />
      </div>
    </Fragment>
  );
};

export default About;
