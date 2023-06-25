import React from 'react'
import { Link } from "react-router-dom";
import './Home.css';
import uterusPic from '../assets/uterus-pic.png';

function Home() {
    return (
        <body className="home-page">
            <header>
                <h1>qUterus</h1>
                <h2>How well do you know the uterus?</h2>
            </header>
            <div className="home-content">
                <div className="uterus-graphic"><img className="box bounce-4" id="uterus-pic" src={uterusPic} alt="Girl in a jacket"/></div>
                <p>Hi my name is Qutera! </p>
                <div className='links-open'>
                    <div id="link"><Link to="quiz">Quiz Game</Link></div>
                    <Link to="aiquiz">Ai Quiz Game</Link>
                </div>
            </div>
        </body>
    );
}

export default Home;

