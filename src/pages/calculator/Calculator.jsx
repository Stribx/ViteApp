import React, { useState } from "react";
import "./Calculator.css";
import { motion } from "framer-motion";
import Button from "../../components/button/Button";

function Calculator() {
  const [result, setResult] = useState(0);
  const [input, setInput] = useState("");
  const evalButton={
    backgroundColor : "var(--accent-color)"
  }

  function handleClick(e) {
    setInput(input + e.target.value);
  }

  function clear() {
    setInput("");
    setResult(0);
  }

  function calculate() {
    try {
      const result = eval(input);
      setResult(result);
    } catch (e) {
      if (e instanceof SyntaxError) {
        setResult("error");
      } else {
        throw e;
      }
    }
    setInput("");
  }

  function del() {
    const newInput = input.slice(0, -1);
    setInput(newInput);
  }

  return (
    <motion.div
      initial={{ x: "-100%", opacity: 0 }}
      animate={{ x: "0%", opacity: 1 }}
      exit={{ x: "100%", opacity: 0 }}
      transition={{ duration: 0.75 }}
      className="calculator"
    >
      <div className="container">
        <div className="result">
          <input type="text" value={input || result} readOnly />
        </div>
        <div className="grid">
          <Button text="C" onClick={clear} style={{gridArea: "1 / 1 / 2 / 3"}} />
          <Button value="Del" text="Del" onClick={del} />
          <Button value="/" text="/" onClick={handleClick} style={evalButton} />
          <Button value="7" text="7" onClick={handleClick} />
          <Button value="8" text="8" onClick={handleClick} />
          <Button value="9" text="9" onClick={handleClick} />
          <Button value="+" text="+" onClick={handleClick} style={evalButton} />
          <Button value="4" text="4" onClick={handleClick} />
          <Button value="5" text="5" onClick={handleClick} />
          <Button value="6" text="6" onClick={handleClick} />
          <Button value="-" text="-" onClick={handleClick} style={evalButton} />
          <Button value="1" text="1" onClick={handleClick} />
          <Button value="2" text="2" onClick={handleClick} />
          <Button value="3" text="3" onClick={handleClick} />
          <Button value="*" text="*" onClick={handleClick} style={evalButton} />
          <Button value="0" text="0" onClick={handleClick} style={{gridArea: "5 / 1 / 6 / 3"}} />
          <Button value="." text="." onClick={handleClick} />
          <Button text="=" onClick={calculate} style={evalButton} />
        </div>
      </div>
    </motion.div>
  );
}

export default Calculator;
