import { useState, useEffect } from "react";
import "./Calculator.css";
import { motion } from "framer-motion";
import Button from "../../components/button/Button";
import GridCalculator from "../../layout/gridCalculator";

function Calculator() {
  const [result, setResult] = useState(0);
  const [input, setInput] = useState("");
  const [isExponential, setIsExponential] = useState(false);
  const evalButton = {
    backgroundColor: "var(--accent-color)",
  };
  const buttonTap = {
    scale: 0.9,
    backgroundColor: "var(--main-text-color)",
  };
  const buttonTapTrigger = {
    x: [0, 10, -10, 0],
    backgroundColor: "red",
  };

  useEffect(() => {
    if (input !== 0 && Math.abs(input).toString().split("").length >= 11) {
      setInput(parseFloat(input).toExponential());
      setIsExponential(true);
    } else if (isExponential) {
      setInput(parseFloat(input).toExponential());
    }
  }, [input, isExponential]);

  function handleClick(e) {
    if(e.target.value === "."){
      if(input === ""){
        setInput(
          input === "" && e.target.value === "0" ? input + e.target.value : "0" + e.target.value
        );
      }
      else{
        if(input.includes(input.at(-1)) ){
          setInput(
            input === "" && e.target.value === "0" ? input + e.target.value : input + e.target.value
          );
        }
      }
    }
    else{
      setInput(
        input === "" && e.target.value === "0" ? "" : input + e.target.value
      );
    }
  }

  function clear() {
    setIsExponential(false);
    setInput("");
    setResult(0);
  }

  function calculate() {
    if(eval(input) != null){
      if(isExponential){
        setIsExponential(false);
        try {
          setResult(eval(input));
          setInput(eval(input));
        } catch (e) {
          setResult("error");
          setInput("");
        }
        setIsExponential(true)
      }
      else{
        try {
          setResult(eval(input));
          setInput(eval(input));
        } catch (e) {
          setResult("error");
          setInput("");
        }
      }
    }
  }

  function del() {
    if(input !== ""){
      setIsExponential(false);
      setInput(input.slice(0, -1));
      setIsExponential(true);
    }
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
          <div className="text">{input || result}</div>
        </div>
        <GridCalculator>
          <Button
            text="C"
            whileTap={buttonTap}
            onClick={clear}
            style={{ gridArea: "1 / 1 / 2 / 3" }}
          />
          <Button
            value="Del"
            text="Del"
            whileTap={input === "" ? buttonTapTrigger : buttonTap}
            onClick={del}
          />
          <Button
            value="/"
            text="/"
            whileTap={buttonTap}
            onClick={handleClick}
            style={evalButton}
          />
          <Button
            value="7"
            text="7"
            whileTap={buttonTap}
            onClick={handleClick}
          />
          <Button
            value="8"
            text="8"
            whileTap={buttonTap}
            onClick={handleClick}
          />
          <Button
            value="9"
            text="9"
            whileTap={buttonTap}
            onClick={handleClick}
          />
          <Button
            value="+"
            text="+"
            whileTap={buttonTap}
            onClick={handleClick}
            style={evalButton}
          />
          <Button
            value="4"
            text="4"
            whileTap={buttonTap}
            onClick={handleClick}
          />
          <Button
            value="5"
            text="5"
            whileTap={buttonTap}
            onClick={handleClick}
          />
          <Button
            value="6"
            text="6"
            whileTap={buttonTap}
            onClick={handleClick}
          />
          <Button
            value="-"
            text="-"
            whileTap={buttonTap}
            onClick={handleClick}
            style={evalButton}
          />
          <Button
            value="1"
            text="1"
            whileTap={buttonTap}
            onClick={handleClick}
          />
          <Button
            value="2"
            text="2"
            whileTap={buttonTap}
            onClick={handleClick}
          />
          <Button
            value="3"
            text="3"
            whileTap={buttonTap}
            onClick={handleClick}
          />
          <Button
            value="*"
            text="*"
            whileTap={buttonTap}
            onClick={handleClick}
            style={evalButton}
          />
          <Button
            value="0"
            text="0"
            whileTap={input === "" ? buttonTapTrigger : buttonTap}
            onClick={handleClick}
            style={{ gridArea: "5 / 1 / 6 / 3" }}
          />
          <Button
            value="."
            text="."
            whileTap={input === "" ? buttonTapTrigger : buttonTap}
            onClick={handleClick}
          />
          <Button
            text="="
            whileTap={buttonTap}
            onClick={calculate}
            style={evalButton}
          />
        </GridCalculator>
      </div>
    </motion.div>
  );
}

export default Calculator;
