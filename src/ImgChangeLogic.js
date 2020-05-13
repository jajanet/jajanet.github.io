import React, { useEffect, useState, useRef } from "react";

import { bgs, updateImg } from "./backgrounds.js";

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
  const [delay, setDelay] = useState(3500);
  const [delayTemp, setDelayTemp] = useState(3500); // holds delay when paused

  useInterval(() => {
    setBgIdx(bgIdx => (bgIdx + 1) % bgs.length);
  }, delay);

  const handleDelayChange = e =>
    setDelay(isNaN(e.target.value) ? delay : Number(e.target.value));

  useEffect(() => {
    ["bg-text", "bg-border-outer", "bg", "bg-bottom", "im"].forEach(
      className => {
        updateImg(
          className,
          bgIdx,
          Math.min(Math.max(delay / 3, delay - 200), 750)
        );
      }
    );
  }, [bgIdx, delay]);

  function toggleChangeBg() {
    if (changeBgOn) {
      setDelayTemp(delay);
      setDelay(0);
    } else setDelay(delayTemp);
    setChangeBg(!changeBgOn);
  }

  return (
    <>
      <div className="controls">
        <i
          className={"im im-" + (changeBgOn ? "pause" : "play")}
          onClick={toggleChangeBg}
        />
      </div>
      <div className="input">
        <input
          value={delay}
          style={{ display: changeBgOn ? "block" : "none" }}
          onChange={handleDelayChange}
        />
      </div>
    </>
  );
};

export default ImageChangeLogic;
