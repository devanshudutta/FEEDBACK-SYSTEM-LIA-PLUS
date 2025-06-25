const Feedback = require('../models/feedbackModel');

exports.getFeedback = async (req,res) => {

    try{

        const feedback = await Feedback.find();

        res.status(200).json(feedback);

    }
    catch(err){

        res.status(500).json({message: err.message});
    
    }
}

exports.postFeedback = (req, res) => {

   try{

    const feedback = new Feedback(req.body);
    
    feedback.save();

    res.status(201).json(feedback);

   }
   catch(err){

    res.status(400).json({message: err.message})
    
   }
    
}

