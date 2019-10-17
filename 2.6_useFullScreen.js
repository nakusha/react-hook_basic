import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";

const useFullscreen = callback => {
    const element = useRef();
    const runCb = isFull => {
      if (callback && typeof callback === "function") {
        callback(isFull);
      }
    };
    const triggerFull = () => {
      if (element.current) {
        if (element.current.requestFullscreen) {
          element.current.requestFullscreen();
        } else if (element.current.mozRequestFullScreen) {
          element.current.mozRequestFullScreen();
        } else if (element.current.webkitRequestFullscreen) {
          element.current.webkitRequestFullscreen();
        } else if (element.current.msRequestFullscreen) {
          element.current.msRequestFullscreen();
        }
        runCb(true);
      }
    };
    const exitFull = () => {
      document.exitFullscreen();
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
      runCb(false);
    };
    return { element, triggerFull, exitFull };
};
  /*
const useFullscreen = callback => {
  const element = useRef();
  const triggerFull = () => {
    if (element.current) {
      element.current.requestFullscreen();
      if (callback && typeof callback === "function") {
        callback(true);
      }
    }
  };
  const exitFull = () => {
    document.exitFullscreen();
    if (callback && typeof callback === "function") {
      callback(false);
    }
  };
  return { element, triggerFull, exitFull };
};
*/

function App() {
  const onFullS = isFull => {
    console.log(isFull ? "We are Full" : "We are small");
  };
  const { element, triggerFull, exitFull } = useFullscreen(onFullS);
  return (
    <div className="App">
      <div ref={element}>
        <img src="https://i.pinimg.com/originals/05/1f/f3/051ff3fb781ff83c9b0f8a32f9922fa6.png" />
        <button onClick={exitFull}>Exit fullScreen</button>
      </div>
      <button onClick={triggerFull}>Make fullScreen</button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
