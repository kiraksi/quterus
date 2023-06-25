import React from 'react'
import { Link } from "react-router-dom";
import './Home.css';
import uterusPic from '../assets/uterus-pic.png';

function Home() {
    return (
        <body className="home-page">
            <header>
                <h1>Quterus</h1>
            </header>
            <div className="home-content">
                <div className="uterus-graphic"><img className="box bounce-4" id="uterus-pic" src={uterusPic} alt="Girl in a jacket"/></div>
                <div className="info-box">
                    <p id="info">Welcome to Quterus - Quiz about the Uterus! We are a dedicated online platform designed to educate and empower individuals about all aspects of women’s reproductive health. Our mission is to provide a safe and informative space where everyone can learn, explore, and raise awareness about this essential topic. Our quizzes cover a wide range of subjects related to women’s reproductive health, including menstruation, reproductive health conditions, and more to come. Together, let’s empower ourselves and promote positive conversations around this vital aspect of life. Start quizzing now and embark on an enlightening journey toward reproductive health knowledge!
                    Disclaimer: Our quizzes are not meant to replace professional medical advice. If you have specific concerns or questions about your reproductive health, we strongly recommend consulting a qualified healthcare provider. </p>
                </div>
                <div className='links-open'>
                    <button id="link"><Link to="quiz" style={{ textDecoration: 'none', color: 'black' }}>Quiz Game</Link></button>
                    <button id="link"><Link to="aiquiz" style={{ textDecoration: 'none', color: 'black'}}>Ai Quiz Game</Link></button>
                </div>
            </div>
        </body>
    );
}

export default Home;

