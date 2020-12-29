import React, { useState } from "react";
import "./App.css";
import { useEffect } from "react";
import { useForm } from "./useForm";
// eslint-disable-next-line
import { Hello } from "./Hello";
import { useFetch } from "./useFetch";

function App() {
  // const [count, setCount] = useState(10);
  // const [count2, setCount2] = useState(20);
  const [values, handleChange] = useForm({
    email: "",
    password: "",
    firstname: "",
  });
  const [count, setCount] = useState(() =>
    JSON.parse(localStorage.getItem("count"))
  );
  // eslint-disable-next-line
  const { data, loading } = useFetch(`http://numbersapi.com/${count}/trivia`);

  useEffect(() => {
    localStorage.setItem("count", JSON.stringify(count));
  }, [count]);

  // const [showHello, setShowHello] = useState(true);

  // useEffect(() => {
  //   console.log("render");

  //   return () => {
  //     console.log("unmount");
  //   };
  // }, []);

  // useEffect(() => {
  //   console.log("mount1");
  // }, []);

  // useEffect(() => {
  //   console.log("mount2");
  // }, []);

  return (
    <div className="App">
      {/* <p>Counter</p>
      <button
        onClick={() => {
          setCount((c) => c + 1);
          setCount2((c) => c + 1);
        }}
      >
        +
      </button>
      <div>count 1: {count}</div>
      <div>count 2: {count2}</div> */}
      <hr></hr>
      <p>Real Case Example</p>
      <div>
        <div>{!data ? "loading..." : data}</div>
        <div>count: {count}</div>
        <button onClick={() => setCount((c) => c + 1)}>increment</button>
        {/* <button onClick={() => setShowHello(!showHello)}>toggle</button>
        {showHello && <Hello />} */}
        <input
          name="email"
          placeholder="email"
          value={values.email}
          onChange={handleChange}
        />
        <input
          name="firstname"
          placeholder="first name"
          value={values.firstname}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          value={values.password}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}

export default App;
