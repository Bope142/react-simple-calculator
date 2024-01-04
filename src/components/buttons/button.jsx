import React from "react";
import "./style.scss";

export function ButtonNumber(props) {
  return (
    <button
      className="btn btn-number"
      onClick={() => {
        props.eventHandler(props.number);
      }}
    >
      {props.number}
    </button>
  );
}

export function ButtonFunction(props) {
  function removeLastLetter(value) {
    if (value.length > 0) {
      const valueSlice = value.slice(0, -1);
      return valueSlice.length === 0 ? "0" : valueSlice;
    } else {
      return "0";
    }
  }
  function calc(expression) {
    try {
      // eslint-disable-next-line no-eval
      const result = eval(expression);
      if (isFinite(result)) {
        return result;
      } else {
        return "Error: Invalid result";
      }
    } catch (error) {
      return "Error: Invalid expression";
    }
  }
  const handlerClick = (props) => {
    if (props.operation) {
      if (props.operation === "clean") {
        props.setterStateCalcValue("");
        props.setterStateResultValue("0");
      } else if (props.operation === "result") {
        if (!props.propsFinalResult) {
          const result = calc(props.stateCalcValue + props.valueCalc);
          props.setterStateCalcValue(props.stateCalcValue + props.valueCalc);
          props.setterStateResultValue(result);
          props.setterStateFinalResult(true);
        }
      } else {
        const newValue = removeLastLetter(props.stateResultValue);
        props.setterStateResultValue(newValue);
      }
    } else {
      if (props.propsFinalResult) {
        props.setterStateCalcValue(props.valueCalc + props.text);
        props.setterStateFinalResult(false);
        props.setterStateResultValue("0");
      } else {
        const result = calc(props.stateCalcValue + props.valueCalc);
        props.setterStateCalcValue(result + props.text);
        props.setterStateResultValue(result);
        props.operationAdd(true);
        props.setterStateCalculatedt(true);
      }
    }
  };
  return (
    <button
      className="btn btn-function"
      id={props.id}
      onClick={() => {
        handlerClick(props);
      }}
    >
      {props.text}
    </button>
  );
}
