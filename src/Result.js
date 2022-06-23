export const Result = ({ props }) => {
  const {
    tipAmount,
    total,
    isDisabled,
    changeBill,
    changePeople,
    changeTip,
    resetBtn,
  } = props;
  return (
    <div className="result flex column justify-between">
      <div>
        <div className="flex align-center justify-between amount-container">
          <div>
            <h2 className="text-white">Tip Amount</h2>
            <p className="text-light">/person</p>
          </div>
          <p className="amount text-cyan">${tipAmount}</p>
        </div>
        <div className="flex align-center justify-between">
          <div>
            <h2 className="text-white">Total</h2>
            <p className="text-light">/person</p>
          </div>
          <p className="amount text-cyan">${total}</p>
        </div>
      </div>
      <input
        type="button"
        className={`btn ${isDisabled ? "btn-disabled" : undefined}`}
        value="RESET"
        onClick={() => {
          changeBill("");
          changePeople("");
          changeTip("");
          resetBtn();
        }}
      />
    </div>
  );
};
