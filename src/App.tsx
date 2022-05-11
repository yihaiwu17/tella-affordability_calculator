import React, { useEffect, useState } from "react";
import axios from "axios";

import "./App.css";
import QuestionBank from "./components/questionBank";
import Dashboard from "./components/dashboard";

function App() {
  const [salary, setSalary] = useState(0);
  const [partnerSalary, setPartnerSalary] = useState(0);

  useEffect(() => {
    axios({
      method: "post",
      url: "https://react-dev-test-api.vercel.app/api/test",
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        total_income: salary,
        total_liabilities: 20000,
        deposit: 100000,
      },
    }).then(
      (res) => {
        console.log(res);
      },
      (error) => {
        console.log(error);
      }
    );
  }, [salary, partnerSalary]);

  return (
    <div className="App">
      <h1 className="Header">Calculator</h1>
      <div className="content">
        <QuestionBank setSalary={setSalary} />
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
