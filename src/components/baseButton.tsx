import React, {useState} from "react";
import "./buttonStyle.css";

interface Props {
    title?: string;
    leftButtonMsg?: string;
    rightButtonMsg?: string;
}

function BaseButton(props: Props) {
    const [leftButton, setLeftButton] = useState(props.leftButtonMsg ? true : false);
    const [rightButton, setRightButton] = useState(props.rightButtonMsg ? false : true);
    const leftActive = () => {setLeftButton(true); setRightButton(false) };
    const rightActive = () => {setLeftButton(false); setRightButton(true) };

    return (
        <div className="wrapper">
            <p className="title">{props.title}</p>
            <div className="buttonContainer">
                <button className={"button" + (leftButton ? " buttonActive" : "")} onClick={leftActive}>{props.leftButtonMsg ? props.leftButtonMsg : "Yes"}</button>
                <button className={"button" + (rightButton ? " buttonActive" : "")} onClick={rightActive}>{props.rightButtonMsg ? props.rightButtonMsg : "No"}</button>
            </div>
        </div>
    );
}

export default BaseButton;
