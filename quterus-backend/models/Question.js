const mongoose = require('mongoose');

const QuestionSchema = mongoose.Schema({
    topic: String,
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

module.exports = mongoose.model('Questions', QuestionSchema);
