const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');

// Import Routes
const questionsRoute = require('./routes/questions');

app.use('/questions', questionsRoute);

// Connect to DB
mongoose.connect(process.env.DB_CONNECTION);

//Listen to server
app.listen(3000);
