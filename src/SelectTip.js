export const SelectTip = ({ props }) => {
  // The SelectTip keeps track of how much tip should be added to the bill
  // Generating radio buttons for each of the values in the array, in addition to a custom option.

  const { tip, changeTip, resetBtn } = props;
  const percentages = [5, 10, 15, 25, 50];
  return (
    <div className="select-tip">
      <h2>Select Tip</h2>

      <div className="grid">
        {percentages.map((item) => {
          return (
            <>
              <input
                type="radio"
                id={item}
                name="percent"
                onChange={(e) => {
                  changeTip(Number(e.target.id));
                }}
              />
              <label
                for={item}
                className="tip flex justify-center align-center"
              >
                {item}%
              </label>
            </>
          );
        })}
        <input
          type="text"
          id="custom"
          className="tip number flex text-center"
          placeholder="Custom"
          value={tip}
          onFocus={resetBtn}
          onChange={(e) =>
            /^\d*$/.test(e.target.value) ? changeTip(e.target.value) : undefined
          }
        />
      </div>
    </div>
  );
};
