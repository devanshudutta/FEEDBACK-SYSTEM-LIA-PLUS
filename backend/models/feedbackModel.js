const mongoose = require("mongoose");

const feedbackSchema = new mongoose.Schema({
  username: String,
  email: String,
  title: String,
  category: String,
  feedback: String,
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Feedback", feedbackSchema);
