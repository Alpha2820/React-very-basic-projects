import logo from "./logo.svg";
import React,{useState} from 'react';
import "./App.css";

function App() {
  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");
  const [sum, setSum] = useState(0);

  const addition = () => {
    const num1 = parseFloat(number1);
    const num2 = parseFloat(number2);
    setSum(num1 + num2);
  };

  return (
    <div>
      <h1>Add Two Number</h1>
      <input
        type="number"
        placeholder="Enter First number"
        value={number1}
        onChange={(e) => setNumber1(e.target.value)}
      />
      <input
        type="number"
        placeholder="Enter Second number"
        value={number2}
        onChange={(e) => setNumber2(e.target.value)}
      />
      <button onClick={addition}> Add </button>
      <h2>Sum : {sum}</h2>
    </div>
  );
}

export default App;
