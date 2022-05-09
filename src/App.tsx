import React from 'react';
import logo from './logo.svg';
import './App.css';
import QuestionBank from "./components/questionBank";
import Dashboard from "./components/dashboard";


function App() {
    const defaultQuestion = "How many of you are buying the property?"
    return (
        <div className="App">
            <h1 className="Header">Calculator</h1>
            <div className="content">
                <QuestionBank/>
                <Dashboard/>
            </div>
        </div>
    );
}

export default App;
