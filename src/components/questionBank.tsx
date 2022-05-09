import React from "react";
import BaseButton from "./baseButton";
import InputButton from "./inputButton";

function QuestionBank() {
    const defaultQuestion = "How many of you are buying the property?";
    const incomeQuestion = "Do you have another source of income?";
    const loanQuestion = "Do you have any loans?";
    const creditQuestion = "Do you have any credit cards?";
    const salaryQuestion = "What's your base salary/wages?(before tax)";
    const depositQuestion = "How much deposit do you have";
    return (
        <div className="bankContainer">
            <BaseButton title={defaultQuestion} leftButtonMsg="Just Me" rightButtonMsg="I'm buying with someone"/>
            <InputButton withSelect={true} question={salaryQuestion}/>
            <BaseButton title={incomeQuestion}/>
            <BaseButton title={loanQuestion}/>
            <BaseButton title={creditQuestion}/>
            <InputButton question={depositQuestion}/>
        </div>
    );
}

export default QuestionBank;
