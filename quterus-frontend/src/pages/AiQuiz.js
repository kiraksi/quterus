import React from 'react';
import './Quiz.css';
import { useState } from 'react';
import uterusPic from '../assets/uterus-pic.png';

const AiQuiz = () => {
    const [questions, setQuestions] = useState([])
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);

    async function callOpenAIAPI() {
        console.log("Calling the OpenAI API");

        const APIBody = {
            "model": "text-davinci-003",
            "prompt": "xxxx"
        }
        
        await fetch("https://api.openai.com", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + GPT_API_KEY
            },
            body: JSON.stringify(APIBody)
        }).then((data) => {
            return data.json();
        }).then((data) => {
            console.log(data);
            // create a new variable for this?
        });
    }

    const cardChange = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		};

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
    <body class="page">
        <header>
            <h1>qUterus</h1>
            <h2>How well do you know the uterus?</h2>
        </header>
        <div class="content">
            <main class="contentMain">
                <div class="uterus-graphic"><img className="bounce" id="uterus-pic" src={uterusPic} alt="Girl in a jacket"/></div>
                <div class="cards">
                    <Cards questions={questions} currentQuestion={currentQuestion} showScore={showScore} score={score} cardChange={cardChange}/>
                </div>
            </main>
            <nav class="nav">
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

export default AiQuiz;