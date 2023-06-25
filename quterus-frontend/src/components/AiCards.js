import React from 'react';
import PropTypes from 'prop-types';
import './Cards.css';

const AiCards = (props) => {
    return (
        <div className='card'>
            <div>{props.questions}</div>
        </div>
    );
};

export default AiCards;