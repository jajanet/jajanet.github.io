import React from "react";
import ToggleText from "./ToggleText.js";

const About = () => {
  return (
    <>
      <div className="content">
        Hi, I'm Janet! I'm a first generation Vietnamese-American who grew up
        in
          <ToggleText
          before=" Michigan "
          after=" the Grand Rapids Michigan area "
        />
          studying Computer Science at University of Michigan.
              <br />
        <br />
          I'll be a Software Engineering Intern at Google and Confluent for
          the summer and fall of 2020 respectively.
        <ToggleText
          hidden={
            <p>
              As a
			  <ToggleText
                before=" lifelong lover of technology, "
                after=" lifelong lover of technology, one my first endeavors on
			  		the internet involved creating HTML/CSS webpages and MS Paint
			  		graphics on Neopets as a creative outlet. With that, "
              />
			  majoring in computer science always made the most sense for me.
			  My recent experience includes
			  <ToggleText
                before=" a wide range of different fields, and I hope to continue
			  		learning a lot while making a positive impact on society"
                after=" a wide range of different fields like space
			  		(CubeSats), privacy, research, data visualization,
			  		education, and more. Through the course of my career, I
			  		hope to explore more facets of computer science and
			  		contribute to solutions that allieviate poverty and
			  		inaccessiblity"
              />.
              <br />
              <br />
              Outside of computers, my hobbies include: thrifting, making sushi,
              playing{" "}
              <ToggleText
                before="video games"
                after="video games (any Pokemon game, Super Smash Bros,
                League of Legends, etc)"
              />
              , and hammocking. Some things I like too much include animals,
              (especially my rat dog), fanny packs, and Crocs.
            </p>
          }
          before="(show more)"
          after="(...)"
        />
      </div>
    </>
  );
};

export default About;
