import "./assets/styles/main.style/main.scss";
import { ButtonFunction, ButtonNumber } from "./components/buttons/button";

function App() {
  return (
    <div className="App">
      <div className="container__app">
        <div className="container__result__typing">600/2+3227*2</div>
        <div className="container__result">= 12,454</div>
        <div className="container__button_operation_top">
          <ButtonFunction text="Ac" />
          <ButtonFunction text="Supp" />
          <ButtonFunction text="/" id="div-btn" />
          <ButtonFunction text="*" id="mult-btn" />
        </div>
        <div className="container__main__button">
          <div className="main__left">
            <div className="container__numbers">
              <ButtonNumber number="7" />
              <ButtonNumber number="8" />
              <ButtonNumber number="9" />
              <ButtonNumber number="4" />
              <ButtonNumber number="5" />
              <ButtonNumber number="6" />
              <ButtonNumber number="1" />
              <ButtonNumber number="2" />
              <ButtonNumber number="3" />
            </div>
            <div className="content__btm">
              <ButtonNumber number="0" />
              <ButtonFunction text="." />
            </div>
          </div>
          <div className="main__right">
            <ButtonFunction text="-" id="div-btn" />
            <ButtonFunction text="+" id="mult-btn" />
            <ButtonFunction text="=" id="div-btn" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
