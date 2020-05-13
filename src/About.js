import React from "react";
import ToggleText from "./ToggleText.js";

const About = () => {
  return (
    <>
      <div className="content">
        <p>
          Hi, I'm Janet! I'm a first generation Vietnamese-American who grew up
          in
          <ToggleText
            before=" Michigan "
            after=" the Grand Rapids area (Kentwood) "
          />
          studying Computer Science at University of Michigan.
        </p>
        <ToggleText
          hidden={
            <p>
              As a lifelong lover of the technology, one my first endeavors on
              the internet involved creating HTML/CSS webpages and MS Paint
              graphics on Neopets as a creative outlet. With that, majoring in
              computer science made the most sense for me. My recent experience
              includes working in many different areas of technology including
              space (CubeSats), privacy, research, data visualization,
              education, and more. Through the course of my career, I hope to
              explore more facets of computer science and contribute to
              solutions that allieviate poverty and inaccessiblity.
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
