const express = require('express');

const router = express.Router()

const {getFeedback, postFeedback} = require('../controllers/feedbackController');


router.get('/', getFeedback);

router.post('/', postFeedback);

module.exports = router;