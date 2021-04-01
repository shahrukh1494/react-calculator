import React, { useState } from "react";

const Calculator = () => {
  const [data, setData] = useState("");
  let length = data.length;
  let operators = ["+", "-", "/", "*"];

  const handleClick = (e) => {
    //check for two consecutive signs and replace first with second
    for (let i = 0; i < operators.length; i++) {
      for (let j = 0; j < operators.length; j++) {
        if (
          data.charAt(length - 1) === operators[i] &&
          e.target.name === operators[j]
        ) {
          setData(data.slice(0, length - 1) + e.target.name);
          return;
        }
      }
    }
    //check for sign at start except for minus
    if (
      data + e.target.name !== "+" &&
      data + e.target.name !== "/" &&
      data + e.target.name !== "*"
    ) {
      setData(data + e.target.name);
    }
  };

  const addZero = (e) => {
    //check for zeroes before number
    if (
      data !== "" &&
      data.charAt(length - 1) !== "+" &&
      data.charAt(length - 1) !== "-" &&
      data.charAt(length - 1) !== "/" &&
      data.charAt(length - 1) !== "*"
    ) {
      setData(data + e.target.name);
    }
  };

  const addDecimal = (e) => {
    //add only one decimal per number
    if (
      data.indexOf(".") === -1 ||
      data.slice(data.lastIndexOf("+") + 1, length + 1).indexOf(".") === -1 ||
      data.slice(data.lastIndexOf("-") + 1, length + 1).indexOf(".") === -1 ||
      data.slice(data.lastIndexOf("/") + 1, length + 1).indexOf(".") === -1 ||
      data.slice(data.lastIndexOf("*") + 1, length + 1).indexOf(".") === -1
    ) {
      setData(data + e.target.name);
    }
  };

  const calculate = () => {
    try {
      //check for blank input and sign at end
      if (
        data !== "" &&
        data.charAt(length - 1) !== "+" &&
        data.charAt(length - 1) !== "-" &&
        data.charAt(length - 1) !== "/" &&
        data.charAt(length - 1) !== "*"
      ) {
        setData(eval(data).toString());
      }
    } catch (err) {
      setData("ERROR! INVALID INPUT");
    }
  };

  //CE button function to clear input
  const clear = () => {
    setData("");
  };

  //C button function for backspace
  const del = () => {
    setData(data.slice(0, length - 1));
  };

  return (
    <div>
      <div className="data">{data}</div>
      <div className="keypad">
        <button className="clear" onClick={clear}>
          CE
        </button>
        <button className="delete" onClick={del}>
          C
        </button>
        <button className="operator" name="/" onClick={handleClick}>
          &divide;
        </button>
        <button name="7" onClick={handleClick}>
          7
        </button>
        <button name="8" onClick={handleClick}>
          8
        </button>
        <button name="9" onClick={handleClick}>
          9
        </button>
        <button name="*" className="operator" onClick={handleClick}>
          &times;
        </button>
        <button name="4" onClick={handleClick}>
          4
        </button>
        <button name="5" onClick={handleClick}>
          5
        </button>
        <button name="6" onClick={handleClick}>
          6
        </button>
        <button name="-" className="operator" onClick={handleClick}>
          -
        </button>
        <button name="1" onClick={handleClick}>
          1
        </button>
        <button name="2" onClick={handleClick}>
          2
        </button>
        <button name="3" onClick={handleClick}>
          3
        </button>
        <button name="+" className="operator" onClick={handleClick}>
          +
        </button>
        <button name="." onClick={addDecimal}>
          .
        </button>
        <button name="0" onClick={addZero}>
          0
        </button>
        <button className="result" onClick={calculate}>
          =
        </button>
      </div>
    </div>
  );
};

export default Calculator;
