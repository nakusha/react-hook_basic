import React, { useEffect } from "react";
import ReactDOM from "react-dom";

const useBeforeLeave = onBefore => {
  if (typeof onBefore !== "function") {
    return;
  }

  const handle = event => {
    const { clientY } = event;
    // 위로 나갈떄만 발생함
    if (clientY <= 0) {
      onBefore();
    }
  };
  useEffect(() => {
    document.addEventListener("mouseleave", handle);
    return () => document.removeEventListener("mouseleave", handle);
  }, []);
};

function App() {
  const begForLife = () => console.log("plz dont leave");
  useBeforeLeave(begForLife);
  return (
    <div className="App">
      <h1>Hi</h1>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
