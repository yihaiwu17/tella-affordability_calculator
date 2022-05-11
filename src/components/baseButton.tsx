import React, { Dispatch, SetStateAction, useState } from "react";
import "./componentStyle.css";

interface Props {
  title?: string;
  leftButtonMsg?: string;
  rightButtonMsg?: string;
  setPartnerSalary: Dispatch<SetStateAction<boolean>>;
  setOtherIncome: Dispatch<SetStateAction<boolean>>;
  setLoan: Dispatch<SetStateAction<boolean>>;
  setCreditCard: Dispatch<SetStateAction<boolean>>;
}

function BaseButton({
  title,
  leftButtonMsg,
  rightButtonMsg,
  setPartnerSalary,
  setOtherIncome,
  setLoan,
  setCreditCard,
}: Props) {
  const [leftButton, setLeftButton] = useState(leftButtonMsg ? true : false);
  const [rightButton, setRightButton] = useState(rightButtonMsg ? false : true);

  const leftActive = () => {
    setLeftButton(true);
    setRightButton(false);
    setPartnerSalary(false);
    if (title && title.includes("income")) setOtherIncome(true);
    if (title && title.includes("loans")) setLoan(true);
    if (title && title.includes("credit")) setCreditCard(true);
  };

  const rightActive = () => {
    setLeftButton(false);
    setRightButton(true);
    setOtherIncome(false);
    setLoan(false);
    setCreditCard(false);
    if (rightButtonMsg && rightButtonMsg !== undefined) {
      setPartnerSalary(true);
    }
  };

  return (
    <div className="wrapper">
      <p className="title">{title}</p>
      <div className="buttonContainer">
        <button
          className={"button" + (leftButton ? " buttonActive" : "")}
          onClick={leftActive}
        >
          {leftButtonMsg ?? "Yes"}
        </button>
        <button
          className={"button" + (rightButton ? " buttonActive" : "")}
          onClick={rightActive}
        >
          {rightButtonMsg ?? "No"}
        </button>
      </div>
    </div>
  );
}

export default BaseButton;
