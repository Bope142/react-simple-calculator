import "./assets/styles/main.style/main.scss";
import { ButtonFunction, ButtonNumber } from "./components/buttons/button";
import { useState } from "react";

function App() {
  const [resultValue, setResultValue] = useState("0");
  const [calcValue, setCalcValue] = useState("");
  const [operatorIsAdd, setOperatorIsAdd] = useState(false);
  const [calculated, setCalculated] = useState(false);
  const [finalResult, setFinalResult] = useState(false);
  const handlerAddComma = () => {
    if (finalResult) {
      setResultValue("0.");
      setOperatorIsAdd(false);
      setFinalResult(false);
      setCalcValue("");
    } else {
      if (resultValue === "0") {
        setResultValue("0.");
      } else {
        if (calculated) {
          setResultValue("0.");
          setCalculated(false);
          setOperatorIsAdd(false);
        } else {
          if (!resultValue.toLowerCase().includes(".")) {
            setResultValue(resultValue + ".");
          }
        }
      }
    }
  };
  const handlerAddValueCalc = (value) => {
    function isLastCharacterOperator(str) {
      if (str.length > 0) {
        const lastChar = str.charAt(str.length - 1);

        // Check if the last letter is one of the +, -, *, or / operators
        if (["+", "-", "*", "/"].includes(lastChar)) {
          return true;
        } else {
          return false;
        }
      } else {
        // If the string is not a non-empty string, return false
        return false;
      }
    }
    setCalculated(false);
    if (finalResult) {
      setResultValue(value);
      setOperatorIsAdd(false);
      setFinalResult(false);
      setCalcValue("");
    } else {
      if (resultValue === "0") {
        setResultValue(value);
        setOperatorIsAdd(false);
      } else {
        if (isLastCharacterOperator(calcValue) && operatorIsAdd) {
          setResultValue(value);
          setOperatorIsAdd(false);
        } else {
          setResultValue(resultValue + value);
        }
      }
    }
  };
  return (
    <div className="App">
      <div className="container__app">
        <div className="container__result__typing">{calcValue}</div>
        <div className="container__result">{resultValue}</div>
        <div className="container__button_operation_top">
          <ButtonFunction
            text="Ac"
            operation="clean"
            setterStateCalcValue={setCalcValue}
            setterStateResultValue={setResultValue}
            stateCalcValue={calcValue}
          />
          <ButtonFunction
            text="Supp"
            operation="supp"
            setterStateResultValue={setResultValue}
            stateResultValue={resultValue}
          />
          <ButtonFunction
            text="/"
            id="div-btn"
            setterStateCalcValue={setCalcValue}
            setterStateResultValue={setResultValue}
            stateCalcValue={calcValue}
            valueCalc={resultValue}
            operationAdd={setOperatorIsAdd}
            setterStateCalculatedt={setCalculated}
            setterStateFinalResult={setFinalResult}
            propsFinalResult={finalResult}
          />
          <ButtonFunction
            text="*"
            id="mult-btn"
            setterStateCalcValue={setCalcValue}
            setterStateResultValue={setResultValue}
            stateCalcValue={calcValue}
            valueCalc={resultValue}
            operationAdd={setOperatorIsAdd}
            setterStateCalculatedt={setCalculated}
            setterStateFinalResult={setFinalResult}
            propsFinalResult={finalResult}
          />
        </div>
        <div className="container__main__button">
          <div className="main__left">
            <div className="container__numbers">
              <ButtonNumber number="7" eventHandler={handlerAddValueCalc} />
              <ButtonNumber number="8" eventHandler={handlerAddValueCalc} />
              <ButtonNumber number="9" eventHandler={handlerAddValueCalc} />
              <ButtonNumber number="4" eventHandler={handlerAddValueCalc} />
              <ButtonNumber number="5" eventHandler={handlerAddValueCalc} />
              <ButtonNumber number="6" eventHandler={handlerAddValueCalc} />
              <ButtonNumber number="1" eventHandler={handlerAddValueCalc} />
              <ButtonNumber number="2" eventHandler={handlerAddValueCalc} />
              <ButtonNumber number="3" eventHandler={handlerAddValueCalc} />
            </div>
            <div className="content__btm">
              <ButtonNumber number="0" eventHandler={handlerAddValueCalc} />
              <ButtonNumber number="," eventHandler={handlerAddComma} />
            </div>
          </div>
          <div className="main__right">
            <ButtonFunction
              text="-"
              id="div-btn"
              setterStateCalcValue={setCalcValue}
              setterStateResultValue={setResultValue}
              stateCalcValue={calcValue}
              valueCalc={resultValue}
              operationAdd={setOperatorIsAdd}
              setterStateCalculatedt={setCalculated}
              setterStateFinalResult={setFinalResult}
              propsFinalResult={finalResult}
            />
            <ButtonFunction
              text="+"
              id="mult-btn"
              setterStateCalcValue={setCalcValue}
              setterStateResultValue={setResultValue}
              stateCalcValue={calcValue}
              valueCalc={resultValue}
              operationAdd={setOperatorIsAdd}
              setterStateCalculatedt={setCalculated}
              setterStateFinalResult={setFinalResult}
              propsFinalResult={finalResult}
            />
            <ButtonFunction
              text="="
              id="div-btn"
              setterStateCalcValue={setCalcValue}
              setterStateResultValue={setResultValue}
              stateCalcValue={calcValue}
              operation="result"
              valueCalc={resultValue}
              setterStateFinalResult={setFinalResult}
              propsFinalResult={finalResult}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
