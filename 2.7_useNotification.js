import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";

const useNotificaton = (title, options) => {
  if (!("Notification" in window)) {
    return;
  }

  const fireNotif = () => {
    if (Notification.permission !== "granted") {
      Notification.requestPermission().then(permission => {
        if (permission === "granted") {
          new Notification(title, options);
        } else {
          return;
        }
      });
    } else {
      new Notification(title, options);
    }
  };
  return fireNotif;
};

function App() {
  const triggerNotif = useNotificaton("Title Text is This", {
    body: "message Body Here"
  });
  return (
    <div className="App">
      <h1>Hello</h1>
      <button onClick={triggerNotif}>Hello</button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
