const express = require('express');
const cors = require('cors');
const mongo = require('mongoose')
const feedbackRoutes = require("./routes/feedbackRoutes");


const dotenv = require('dotenv');
dotenv.config();


const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))


mongo
  .connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("MongoDB connected");
 })
  .catch((err) => console.error("MongoDB connection error:", err)); 
app.use('/feedback', feedbackRoutes);

const port = 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});




