// 페이지 나갈떄 메세지박스뜨는것

import React, { useEffect, useState, useRef } from "react";
import ReactDOM from "react-dom";

const usePreventLeave = () => {
  const listener = event => {
    event.preventDefault();
    //beforeunload가 return value를 요구함
    event.returnValue = "";
  };
  const enablePrevent = () => window.addEventListener("beforeunload", listener);
  const disablePrevent = () =>
    window.addEventListener("beforeunload", listener);
  return { enablePrevent, disablePrevent };
};

const App = () => {
  const { enablePrevent, disablePrevent } = usePreventLeave();
  return (
    <div className="App">
      <button onClick={enablePrevent}>Protect</button>
      <button onClick={disablePrevent}>UnProtect</button>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
