const mongoose = require('mongoose');

const QuestionSchema = mongoose.Schema({
    id: Number,
    question: String,
    answerOptions: [
        {
            answerText: String,
            isCorrect: Boolean
        },
        {
            answerText: String,
            isCorrect: Boolean
        },
        {
            answerText: String,
            isCorrect: Boolean
        },
        {
            answerText: String,
            isCorrect: Boolean
        }
    ]
});