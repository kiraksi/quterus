import React from 'react';
import './AiQuiz.css';
import { useState, useEffect } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";
import uterusPic from '../assets/uterus-pic.png';
import AiCards from '../components/AiCards';

const AiQuiz = () => {
    const [API, setAPI] = useState("https://kira-bard-script.onrender.com/request")
    const [questions, setQuestions] = useState([{
    topic: "Menstrual Cycle",
    question: "Qutera is thinking...",
    answerOptions: [
        { answerText: "Qutera is thinking....",
          isCorrect: true,
          _id: "6497122d8b7852503441b051"},
        { answerText: "Qutera is thinking....",
          isCorrect: false,
          _id: "6497122d8b7852503441b052"},
        { answerText: "Qutera is thinking....",
          isCorrect: false,
          _id: "6497122d8b7852503441b053"},
        { answerText: "Qutera is thinking....",
          isCorrect: false,
          _id: "6497122d8b7852503441b054"}
    ],
    _id: "6497122d8b7852503441b050",
    __v: 0
}]);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);

    useEffect(() => {
        (async () => {
            axios
            .get(API)
            .then((result) => {
                setQuestions(result.data);
            })
            .catch((err) => {
                console.log(err);
            });
        })();

        return () => {
            // this now gets called when the component unmounts
        };
    }, [API]);
    
    const cardChange = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1);
        }

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
        };
    }
    
    // react router for different pages
    // api for chatgpt or google bard -> use for questions, may give weird results
    // deploy with Computer Engine -> virtual machine -> use cloud run, app engine for easiest way to deploy (google for this)
    return (
        <body className="page2">
            <header>
                <Link to="/" style={{ textDecoration: 'none' }}><h1>Quterus</h1></Link>
            </header>
            <div className="content2">
                <main className="contentMain2">
                    <div className="uterus-graphic"><img className="bounce" id="uterus-pic" src={uterusPic} alt="Girl in a jacket"/>Qutera is our AI who can think up her own questions!</div>
                    <div className="cards">
                        <AiCards questions={questions} currentQuestion={currentQuestion} showScore={showScore} score={score} cardChange={cardChange}/>
                    </div>
                </main>
            </div>
        </body>
    );
};
    
export default AiQuiz;