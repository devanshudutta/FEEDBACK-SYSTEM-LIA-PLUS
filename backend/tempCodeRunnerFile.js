const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose')
const feedbackRoutes = require("./routes/feedbackRoutes");


require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

mongoose
  .connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("MongoDB connected");
 })
  .catch((err) => console.error("MongoDB connection error:", err));
app.use('/api/feedback', feedbackRoutes);

const port = 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});




