import React, { Dispatch, SetStateAction, useState } from "react";
import "./buttonStyle.css";

interface Props {
  withoutSelect?: boolean;
  question?: string;
  setSalary: Dispatch<SetStateAction<number>>;
}

function InputButton({ withoutSelect, question, setSalary }: Props) {
  const [focused, setFocused] = useState(false);

  const onFocus = () => setFocused(true);
  const onBlur = () => setFocused(false);

  return (
    <div className="wrapper">
      <p className="title">{question}</p>
      <div className={"inputButton" + (focused ? " focused" : "")}>
        <div>$</div>
        <div className="inputDiv" onFocus={onFocus} onBlur={onBlur}>
          <input
            className="inputValue"
            type="number"
            onChange={(event: any) => setSalary(event.target.value)}
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
