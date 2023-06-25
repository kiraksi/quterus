import React from 'react';
import './Quiz.css';
import { useState, useEffect } from 'react';
import uterusPic from '../assets/uterus-pic.png';
import AiCards from '../components/AiCards';

const GPT_API_KEY = ""

const AiQuiz = () => {
    const [questions, setQuestions] = useState([])
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);

    useEffect(() => {
        let ignore = false;
        
        if (!ignore)  callOpenAIAPI()
        return () => { ignore = true; }
        },[]);

    async function callOpenAIAPI() {
        console.log("Calling the OpenAI API");

        const APIBody = {
            "model": "gpt-3.5-turbo",
            "prompt": 'I want a question on the topic of menstruation diseases, it should ask the question based on the symptoms and there should be four answer options, where one is correct. Answer in JSON format with unique ids: { topic: "Menstrual-Cycle", question: "Question 1?", answerOptions: [ { answerText: "Answer 1", isCorrect: true, _id: "6497122d8b7852503441b051"}, { answerText: "Answer 2", isCorrect: false, _id: "6497122d8b7852503441b052"}, { answerText: "Answer 3", isCorrect: false, _id: "6497122d8b7852503441b053"}, { answerText: "Answer 1", isCorrect: false, _id: "6497122d8b7852503441b054"} ], _id: "6497122d8b7852503441b050", __v: 0 }];'
        }
        
        await fetch("https://api.openai.com/v1/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + GPT_API_KEY
            },
            body: JSON.stringify(APIBody)
        }).then((data) => {
            return data;
        }).then((data) => {
            console.log(data);
            setQuestions([data])
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
    <body className="page">
        <header>
            <h1>qUterus</h1>
            <h2>How well do you know the uterus?</h2>
        </header>
        <div className="content">
            <main className="contentMain">
                <div className="uterus-graphic"><img className="bounce" id="uterus-pic" src={uterusPic} alt="Girl in a jacket"/></div>
                <div className="cards">
                    <AiCards questions={questions} currentQuestion={currentQuestion} showScore={showScore} score={score} cardChange={cardChange}/>
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

export default AiQuiz;