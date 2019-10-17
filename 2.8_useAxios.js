import React from "react";
import ReactDOM from "react-dom";
import defaultAxios from "axios";
import { useState, useEffect } from "react";

const useAxios = (opts, axiosInstance = defaultAxios) => {
  const [state, setState] = useState({
    loading: true,
    error: null,
    data: null
  });

  const [trigger, setTrigger] = useState(0);
  if (!opts.url) {
    return;
  }

  const refecth = () => {
    setState({
      ...state,
      loading: true
    });
    setTrigger(Date().now());
  };
  useEffect(() => {
    axiosInstance(opts)
      .then(data => {
        setState({
          ...state,
          loading: false,
          data
        });
      })
      .catch(error => {
        setState({ ...state, loading: false, error });
      });
  }, [trigger]);
  return { ...state, refecth };
};

//export default useAxios;


const App = () => {
  const { loading, data, error, refecth } = useAxios({
    url: "https://yts.am/api/v2/list_movies.json"
  });
  console.log(`Loading: ${loading}\n${error}\nData: ${JSON.stringify(data)}`);
  return (
    <div className="App">
      <h1>{data && data.status}</h1>
      <h2>{loading && "Loading"}</h2>
      <button onClick={refecth}>Refecth</button>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
