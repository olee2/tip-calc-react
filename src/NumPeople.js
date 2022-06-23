import { useState, useEffect } from "react";
import image from "./icon-person.svg";

export const NumPeople = ({ props }) => {
  const { people, changePeople } = props;
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (people && people < 1) {
      setIsError(true);
    } else {
      setIsError(false);
    }
  }, [people]);
  return (
    <div className={`num-people ${isError && "show-error"}`}>
      <div className="flex align-center justify-between">
        <h2>Number of People</h2>
        <p className="error">Can't be Zero</p>
      </div>
      <input
        type="text"
        style={{ backgroundImage: `url(${image})` }}
        placeholder="0"
        value={people}
        id="people"
        className="number input-background"
        onChange={(e) =>
          /^\d*$/.test(e.target.value)
            ? changePeople(e.target.value)
            : undefined
        }
      />
    </div>
  );
};
