import React from 'react';
import './Quiz.css';
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import uterusPic from '../assets/uterus-pic.png';
import axios from "axios";
import Cards from '../components/Cards';

const QUESTIONS = [
  {
    topic: "Menstrual Cycle",
    question: "Question 1?",
    answerOptions: [
        { answerText: "Answer 1",
          isCorrect: true,
          _id: "6497122d8b7852503441b051"},
        { answerText: "Answer 2",
          isCorrect: false,
          _id: "6497122d8b7852503441b052"},
        { answerText: "Answer 3",
          isCorrect: false,
          _id: "6497122d8b7852503441b053"},
        { answerText: "Answer 1",
          isCorrect: false,
          _id: "6497122d8b7852503441b054"}
    ],
    _id: "6497122d8b7852503441b050",
    __v: 0
}];

const Quiz = () => {
  const [topic, setTopic] = useState("Endometriosis")
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

  const API = '';

  const getData = () => {
    axios
    .get(API)
    .then((result) => {
      setQuestions(result.data);
    })
    .catch((err) => {
      console.log(err);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  const cardChange = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		};

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < QUESTIONS.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		};
  }
// react router for different pages
// api for chatgpt or google bard -> use for questions, may give weird results
// deploy with Computer Engine -> virtual machine -> use cloud run, app engine for easiest way to deploy (google for this)
  return (
    <body className="page">
      <header>
        <Link to="/" style={{ textDecoration: 'none' }}><h1>qUterus</h1></Link>
        <h2>How well do you know the uterus?</h2>
      </header>
      <div className="content">
        <main className="contentMain">
          <div className="uterus-graphic"><img className="bounce" id="uterus-pic" src={uterusPic} alt="Girl in a jacket"/></div>
          <div className="cards">
            <Cards questions={QUESTIONS} currentQuestion={currentQuestion} showScore={showScore} score={score} cardChange={cardChange}/>
          </div>
        </main>
        <nav className="nav">
          <section className="topics">
            <div className="Menstrual Cycle">
              <h3>Menstrual Cycle</h3>
              <button id="topic-buttons">Endometriosis</button>
              <button id="topic-buttons">PCOS</button>
              <button id="topic-buttons">PMDD</button>
              <button id="topic-buttons">Contraceptives</button>
            </div>
            <div className="random">
              <h3>Want more practice? Ask our AI Utera</h3>
              <button id="topic-buttons">Mesntruation Questions</button>
            </div>
          </section>
        </nav>
      </div>
      <footer>Footer</footer>
    </body>
  );
};

export default Quiz;