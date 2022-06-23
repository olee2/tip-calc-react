import { useState, useEffect } from "react";
import image from "./icon-dollar.svg";

export const Bill = ({ props }) => {
  const [isError, setIsError] = useState(false);
  const { changeBill, bill } = props;

  useEffect(() => {
    if (bill && bill < 1) {
      setIsError(true);
    } else {
      setIsError(false);
    }
  }, [bill]);
  return (
    <div className={`bill ${isError && "show-error"}`}>
      <div className="flex justify-between align-center">
        <h2>Bill</h2>
        <p className="error">Can't be Zero</p>
      </div>
      <input
        type="text"
        style={{ backgroundImage: `url(${image})` }}
        id="bill"
        placeholder="0"
        value={bill}
        className="number input-background"
        onChange={(e) =>
          /^\d*$/.test(e.target.value) ? changeBill(e.target.value) : undefined
        }
      />
    </div>
  );
};
