import React, { useEffect, useState } from "react";
import axios from "axios";

import "./App.css";
import QuestionBank from "./components/questionBank";
import Dashboard from "./components/dashboard";

function App() {
  const [borrow, setBorrow] = useState(0);
  const [salary, setSalary] = useState(0);
  const [deposit, setDeposit] = useState(0);
  const [liabilities, setLiabilities] = useState(0);

  useEffect(() => {
    axios({
      method: "post",
      url: "https://react-dev-test-api.vercel.app/api/test",
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        total_income: salary,
        total_liabilities: liabilities,
        deposit: deposit,
      },
    }).then(
      (res) => {
        console.log(res);
        setBorrow(res.data.borrowing);
      },
      (error) => {
        console.log(error);
      }
    );
  }, [salary, liabilities, deposit]);

  return (
    <div className="App">
      <h1 className="Header">Calculator</h1>
      <div className="content">
        <QuestionBank
          setSalary={setSalary}
          setDeposit={setDeposit}
          setLiabilities={setLiabilities}
        />
        <Dashboard borrow={borrow} salary={salary} deposit={deposit} />
      </div>
    </div>
  );
}

export default App;
