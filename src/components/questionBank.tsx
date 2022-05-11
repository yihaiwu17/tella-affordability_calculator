import React, { Dispatch, SetStateAction, useState } from "react";

import BaseButton from "./baseButton";
import InputButton from "./inputButton";

interface Props {
  setSalary: Dispatch<SetStateAction<number>>;
  setDeposit: Dispatch<SetStateAction<number>>;
  setLiabilities: Dispatch<SetStateAction<number>>;
}

function QuestionBank({ setSalary, setDeposit, setLiabilities }: Props) {
  const [partnerSalary, setPartnerSalary] = useState(false);
  const [otherIncome, setOtherIncome] = useState(false);
  const [loan, setLoan] = useState(false);
  const [creditCard, setCreditCard] = useState(false);

  const defaultQuestion = "How many of you are buying the property?";

  //income questions
  const incomeQuestion = "Do you have another source of income?";
  const secondIncome = "Other income #1";

  //loan questions
  const loanQuestion = "Do you have any loans?";
  const secondLoan = "Loan #1";

  //credit card questions
  const creditQuestion = "Do you have any credit cards?";
  const creditCards = "Credit card #1";

  //salary questions
  const salaryQuestion = "What's your base salary/wages?(before tax)";
  const secondSalary =
    "What's the second applicant's base salary/wages?(before tax)";

  //deposit
  const depositQuestion = "How much deposit do you have";

  return (
    <div className="bankContainer">
      {/* salary question */}
      <BaseButton
        title={defaultQuestion}
        leftButtonMsg="Just Me"
        rightButtonMsg="I'm buying with someone"
        setPartnerSalary={setPartnerSalary}
        setOtherIncome={setOtherIncome}
        setLoan={setLoan}
        setCreditCard={setCreditCard}
      />
      <InputButton
        question={salaryQuestion}
        setSalary={setSalary}
        setDeposit={setDeposit}
        setLiabilities={setLiabilities}
      />
      {partnerSalary && (
        <InputButton
          question={secondSalary}
          setSalary={setSalary}
          setDeposit={setDeposit}
          setLiabilities={setLiabilities}
        />
      )}

      {/* income question */}
      <BaseButton
        title={incomeQuestion}
        setPartnerSalary={setPartnerSalary}
        setOtherIncome={setOtherIncome}
        setLoan={setLoan}
        setCreditCard={setCreditCard}
      />
      {otherIncome && incomeQuestion.includes("income") && (
        <InputButton
          question={secondIncome}
          setSalary={setSalary}
          setDeposit={setDeposit}
          setLiabilities={setLiabilities}
        />
      )}

      {/* loan question */}
      <BaseButton
        title={loanQuestion}
        setPartnerSalary={setPartnerSalary}
        setOtherIncome={setOtherIncome}
        setLoan={setLoan}
        setCreditCard={setCreditCard}
      />
      {loan && (
        <InputButton
          question={secondLoan}
          withoutSelect={true}
          setSalary={setSalary}
          setDeposit={setDeposit}
          setLiabilities={setLiabilities}
        />
      )}

      {/* credit card question */}
      <BaseButton
        title={creditQuestion}
        setPartnerSalary={setPartnerSalary}
        setOtherIncome={setOtherIncome}
        setLoan={setLoan}
        setCreditCard={setCreditCard}
      />
      {creditCard && (
        <InputButton
          question={creditCards}
          withoutSelect={true}
          setSalary={setSalary}
          setDeposit={setDeposit}
          setLiabilities={setLiabilities}
        />
      )}

      <InputButton
        question={depositQuestion}
        setSalary={setSalary}
        setDeposit={setDeposit}
        withoutSelect={true}
        setLiabilities={setLiabilities}
      />
    </div>
  );
}

export default QuestionBank;
