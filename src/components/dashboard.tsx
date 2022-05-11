import React from "react";
import "./componentStyle.css";

interface Props {
  borrow?: number;
  salary?: number;
}

function Dashboard({ borrow, salary }: Props) {
  return (
    <div className="dashboard">
      <div>
        <p>Here's what you can borrow</p>
        <p className="borrow">${borrow ?? "0"}</p>
      </div>
      <div>
        <p>Total income</p>
        <p>${salary}</p>
      </div>
    </div>
  );
}

export default Dashboard;
