const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Import Routes
const questionsRoute = require('./routes/questions');

app.use('/questions', questionsRoute);

// Connect to DB
mongoose.connect(process.env.DB_CONNECTION);

//Listen to server
app.listen(8080);