import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

function App() {
  const sayHello = () => console.log("hello");

  const [number, setNumber] = useState(0);
  const [aNumber, setAnumber] = useState(0);
  // 무언가 사용할떄 발생하는것 componentDidmount의 역할
  // 조건을 걸어서 조건에 만족하면 실행되게 할 수 있다.
  // useeffect -> function -> componentDidmount 순서
  useEffect(sayHello, [number]);
  return (
    <div className="App">
      <div>Hi</div>
      <button onClick={() => setNumber(number + 1)}>{number}</button>
      <button onClick={() => setAnumber(aNumber + 1)}>{aNumber}</button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
