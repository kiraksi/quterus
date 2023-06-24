const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.send('We are calling get questions');
});

module.exports = router;