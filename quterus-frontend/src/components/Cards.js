import React from 'react';
import PropTypes from 'prop-types';

import './Cards.css';

const Cards = (props) => {
  return (
    <div className='card'>
			{props.showScore ? (
				<div className='score-section'>
					You scored {props.score} out of {props.questions.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {props.currentQuestion + 1}</span>/{props.questions.length}
						</div>
						<div className='question-text'>{props.questions[props.currentQuestion].question}</div>
					</div>
					<div className='answer-section'>
						{props.questions[props.currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => props.cardChange(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
  );
};

Cards.propTypes = {
    questions: PropTypes.arrayOf(
        PropTypes.shape({
          _id: PropTypes.string.isRequired,
          question: PropTypes.string.isRequired,
          answerOptions: PropTypes.arrayOf(
            PropTypes.shape({
                answerText: PropTypes.string.isRequired,
                isCorrect: PropTypes.bool.isRequired
            })
          ).isRequired
        })
      ).isRequired,
      score: PropTypes.number.isRequired,
	  showScore: PropTypes.number.isRequired,
      cardChange: PropTypes.func.isRequired
};

export default Cards;