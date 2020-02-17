import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const App = () => {
  const [item, setItem] = useState(1);
  const [email, setEmail] = useState("");
  const incrementItem = () => setItem(item + 1);
  const decrementItem = () => setItem(item - 1);

  const updateEmail = e => {
    const {
      target: { value }
    } = e;
    setEmail(value);
  }
  return (
    <div className="App">
      <h1>Hello {item}</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick={incrementItem}>increment</button>
      <button onClick={decrementItem}>decrement</button>
      <input placeholder="Email" value={email} onChange={updateEmail}/>
    </div>
  );
};

// Change Hook to Component(befroe use hook)
class AppUgly extends React.Component {
  state = {
    item: 1
  };
  render() {
    const { item } = this.state;
    return (
      <div className="AppUgly">
        <h1>Hello {item}</h1>
        <h2>Start editing to see some magic happen!</h2>
        <button onClick={incrementItem}>increment</button>
        <button onClick={decrementItem}>decrement</button>
      </div>
    );
  }
  incrementItem = () => {
    this.setState(state => {
      return {
        item: state.itme + 1
      };
    });
  };

  decrementItem = () => {
    this.setState(state => {
      return {
        item: state.itme - 1
      };
    });
  };
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
