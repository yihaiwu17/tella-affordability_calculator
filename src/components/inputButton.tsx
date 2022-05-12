import React, { Dispatch, SetStateAction, useState } from "react";
import "./componentStyle.css";

interface Props {
  withoutSelect?: boolean;
  question?: string;
  setSalary: Dispatch<SetStateAction<number>>;
  setDeposit: Dispatch<SetStateAction<number>>;
  setLiabilities: Dispatch<SetStateAction<number>>;
}

function InputButton({
  withoutSelect,
  question,
  setSalary,
  setDeposit,
  setLiabilities,
}: Props) {
  const [focused, setFocused] = useState(false);
  const onFocus = () => setFocused(true);
  const onBlur = () => setFocused(false);

  const handleChange = (event: any) => {
    if (question?.includes("salary")) setSalary(parseInt(event.target.value));
    if (question?.includes("deposit")) setDeposit(parseInt(event.target.value));
    if (question?.includes("Loan"))
      setLiabilities(parseInt(event.target.value));
  };

  return (
    <div className="wrapper">
      <p className="title">{question}</p>
      <div className={"inputButton" + (focused ? " focused" : "")}>
        <div>$</div>
        <div className="inputDiv" onFocus={onFocus} onBlur={onBlur}>
          <input
            className="inputValue"
            type="number"
            onChange={(e) => handleChange(e)}
            placeholder="0"
          />
        </div>
        {!withoutSelect && (
          <div className="selectDiv">
            <select className="select" onFocus={onFocus} onBlur={onBlur}>
              <option value="year">per year</option>
              <option value="week">per week</option>
            </select>
          </div>
        )}
      </div>
    </div>
  );
}

export default InputButton;
