import { Bill } from "./Bill";
import { SelectTip } from "./SelectTip";
import { NumPeople } from "./NumPeople";

export const Calculator = ({ props }) => {
  return (
    <form className="calculator column flex">
      <Bill props={props} />
      <SelectTip props={props} />
      <NumPeople props={props} />
    </form>
  );
};
