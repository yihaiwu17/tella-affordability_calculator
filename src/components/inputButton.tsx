import React, {useEffect, useState} from "react";
import "./buttonStyle.css";
import axios from "axios";

interface Props {
    withSelect?: boolean;
    question?: string;
}

function InputButton({withSelect,question}: Props) {
    const [focused, setFocused] = useState(false);
    const [salary1, setSalary1] = useState(0);
    const [salary2, setSalary2] = useState(0);
    const [borrow, setBorrow] = useState(0);
    const onFocus = () => setFocused(true);
    const onBlur = () => setFocused(false);

    console.log(salary1);
    useEffect(()=>{
        axios({
            method: 'post',
            url: 'https://react-dev-test-api.vercel.app/api/test',
            headers: {
                'Content-Type': 'application/json'
            },
            data : {
                "total_income": 150000,
                "total_liabilities": 20000,
                "deposit": 100000
            }
        }).then((res) => {
            console.log(res);
        },(error) => {
            console.log(error);
        })
    },[salary1, salary2])
    return (
        <div className="wrapper">
            <p className="title">{question}</p>
        <div className={"inputButton" + (focused ? " focused" : "")}>
            <div>
                $
            </div>
            <div className="inputDiv" onFocus={onFocus} onBlur={onBlur}>
                <input className="inputValue" type="number" onChange={(event :any)=> setSalary1(event.target.value)} placeholder="0"/>
            </div>
            { withSelect && (<div className="selectDiv">
                <select className="select" onFocus={onFocus} onBlur={onBlur}>
                    <option value="year">per year</option>
                    <option value="week">per week</option>
                </select>
            </div>)}
        </div>
        </div>
    );
}

export default InputButton;
