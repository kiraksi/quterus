import React from 'react';
import './Quiz.css';
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import uterusPic from '../assets/uterus-pic.png';
import axios from "axios";
import Cards from '../components/Cards';


const Quiz = () => {
  const [API, setAPI] = useState("https://quterus-api.onrender.com/questions")
  const [questions, setQuestions] = useState([{
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
}]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
  const [animation, setAnimation] = useState("bounce");
    
  useEffect(() => {
    axios
    .get(API)
    .then((result) => {
      setQuestions(result.data);
    })
    .catch((err) => {
      console.log(err);
    });
  }, [API]);

  const cardChange = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
      setAnimation("bounce-infinite")
		}
    else {
      setAnimation("shake");
    }

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		};
  }

  const changeTopic = (topic) => {
    setAPI(`https://quterus-api.onrender.com/questions/${topic}`)
    setCurrentQuestion(0)
    setShowScore(false)
    setScore(0)
  }

// react router for different pages
// api for chatgpt or google bard -> use for questions, may give weird results
// deploy with Computer Engine -> virtual machine -> use cloud run, app engine for easiest way to deploy (google for this)
  return (
    <body className="page">
      <header>
        <Link to="/" style={{ textDecoration: 'none' }}><h1>Quterus</h1></Link>
      </header>
      <div className="content">
        <main className="contentMain">
          <div className="uterus-graphic"><img className={animation} id="uterus-pic" src={uterusPic} alt="Girl in a jacket"/>❤️ I bounce if you get it right, I shake when I am angry</div>
          <div className="cards">
            <h2>How well do you know the uterus?</h2>
            <Cards questions={questions} currentQuestion={currentQuestion} showScore={showScore} score={score} cardChange={cardChange}/>
          </div>
        </main>
        <nav className="nav">
          <section className="topics">
            <div className="Menstrual Cycle">
              <h3>Topics</h3>
              <button id="topic-buttons" onClick={() => changeTopic("menstrual-cycle")}>Menstrual Cycle</button>
              <button id="topic-buttons" onClick={() => changeTopic("endometriosis")}>Endometriosis</button>
              <button id="topic-buttons" onClick={() => changeTopic("PCOS")}>PCOS</button>
              <button id="topic-buttons" onClick={() => changeTopic("PMDD")}>PMDD</button>
            </div>
            <div className="random">
              <h3>Want more practice? Ask our AI Utera</h3>
              <button id="topic-buttons">Menstruation Questions</button>
            </div>
          </section>
        </nav>
      </div>
    </body>
  );
};

export default Quiz;