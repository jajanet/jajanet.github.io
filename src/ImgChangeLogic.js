import React, { useEffect, useState, useRef } from "react";

import SvgIcon, {pauseIcon, playIcon, backIcon, forwardIcon} from "./SvgIcon.js"
import { bgs, updateImg, updateSvg, preloadImages } from "./backgrounds.js";
import { Fragment } from "react/cjs/react.production.min.js";

export function hiddenStyle(isShown) {
  return {
    display: isShown ? "" : "block",
    opacity: isShown ? "" : "0",
    height: isShown ? "auto" : "0",
    overflow: isShown ? "auto" : "hidden",
    transitionDuration: ".7s" 
  }
}

function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest function.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    const tick = () => savedCallback.current();

    if (!isNaN(delay) && Number(delay) > 0) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

const ImageChangeLogic = () => {
  const [bgIdx, setBgIdx] = useState(0);
  const [changeBgOn, setChangeBg] = useState(true);
  const [delay, setDelay] = useState(3000);
  const [delayTemp, setDelayTemp] = useState(3000); // holds delay when paused

  // Preload images
  preloadImages();

  useInterval(() => {
    setBgIdx(bgIdx => (bgIdx + 1) % bgs.length);
  }, delay);

  const handleDelayChange = e =>
    setDelay(isNaN(e.target.value) ? delay : Number(e.target.value));

  // Expand and hide little exploration hint in the first 2 seconds of loading
  window.addEventListener('load', function() {
    const elementToHide = document.getElementById('temp'); 
  
    setTimeout(function() { 
      elementToHide.style.fontSize = '1.01em';
    }, 100);

    setTimeout(function() {
      elementToHide.style.opacity = '0'; 
      elementToHide.style.fontSize = '0';
    }, 2000);
  });

  function getTransitionDelay(value, upper = 5000, lower = 300) {
    return delay > upper ? upper : (value < lower ? lower : value / 2);
  }

  useEffect(() => {
    ["bg-text", "bg-border-outer", "bg", "bg-bottom"].forEach(
      className => {
        updateImg(
          className,
          bgIdx,
          getTransitionDelay(delay),
        );
      });

      ["icon-image"].forEach(
        className => {
          updateSvg(
            className,
            bgIdx,
            getTransitionDelay(delay)
          );
        }
    );
  
  }, [bgIdx, delay]);

  function nextBg() {
    setBgIdx(bgIdx => (bgIdx + 1) % bgs.length)
  }

  function prevBg() {
    setBgIdx(bgIdx => (bgIdx - 1 + bgs.length) % bgs.length)
  }

  function toggleChangeBg() {
    if (changeBgOn) {
      setDelayTemp(delay);
      setDelay(0);
    } else setDelay(delayTemp);
    setChangeBg(!changeBgOn);
  }

  // Return HTML component for image changing controls
  return (
    <Fragment>
      <div className="controls">
        <span onClick={prevBg} style={{ top: "-5px", position: "relative" }}>
          <SvgIcon index={6} height={30} width={30} pattern={backIcon} />
        </span>
        <span onClick={toggleChangeBg}>
          <SvgIcon index={6} height={40} width={40}
            pattern={changeBgOn ? pauseIcon : playIcon} />
        </span>
        <span onClick={nextBg} style={{ top: "-5px", position: "relative" }}>
          <SvgIcon index={6} height={30} width={30} pattern={forwardIcon} />
        </span>
      </div>
      <div className="input">
        <input
          value={delay}
          style={hiddenStyle(changeBgOn)}
          onChange={handleDelayChange}
        />
      </div>
    </Fragment>
  );
};

export default ImageChangeLogic;
