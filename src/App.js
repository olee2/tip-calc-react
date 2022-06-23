import { useState, useEffect } from "react";
import { Calculator } from "./Calculator";
import { Result } from "./Result";
import { ReactComponent as Logo } from "./logo.svg";

const App = () => {
  const [bill, setBill] = useState("");
  const [tip, setTip] = useState("");
  const [people, setPeople] = useState("");
  const [tipAmount, setTipAmount] = useState(0);
  const [total, setTotal] = useState(0);
  const [isDisabled, setIsDisabled] = useState(true);

  const resetBtn = () => {
    const btns = document.querySelectorAll("input[name='percent']");

    btns.forEach((btn) => {
      btn.checked = false;
    });
  };

  const changeBill = (value) => {
    setBill(value);
  };

  const changePeople = (value) => {
    setPeople(value);
  };

  const changeTip = (value) => {
    setTip(value);
  };

  useEffect(() => {
    let currentTip = (bill * (tip / 100)) / people;
    let currentTotal = currentTip + bill / people;

    bill || tip || people ? setIsDisabled(false) : setIsDisabled(true);

    isFinite(currentTip) && !isNaN(currentTip)
      ? setTipAmount(currentTip.toFixed(2))
      : setTipAmount((0).toFixed(2));

    isFinite(currentTotal) && !isNaN(currentTotal)
      ? setTotal(currentTotal.toFixed(2))
      : setTotal((0).toFixed(2));
  }, [bill, tip, people]);

  return (
    <div>
      <Logo className="logo" />
      <section className="container flex">
        <Calculator
          props={{
            changeBill,
            bill,
            changePeople,
            people,
            changeTip,
            tip,
            isDisabled,
            resetBtn,
          }}
        />
        <Result
          props={{
            tipAmount,
            total,
            isDisabled,
            changeBill,
            changePeople,
            changeTip,
            resetBtn,
          }}
        />
      </section>
    </div>
  );
};

export default App;
