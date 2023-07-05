
const mentorModel = require("../models/mentorslist");

module.exports.createMentor = async (req,res,next) => {
    const mentorData = new mentorModel({...req.body.mentor});
    try {
        const createdResponse = await mentorData.save();
        res.send(createdResponse)
    } catch(err) {
        console.error(err);
        res.status(500).send(err);
    }
}

module.exports.getMentors = async (req,res,next) => {
	console.log("API getMentors has been hit!");
    try {
        const mentors = await mentorModel.find();
        res.send(mentors)
    }catch(err) {
        console.error(err);
        res.status(500).send(err);
    }
}

module.exports.getMentorsById = async (req,res,next) => {
    console.log("API getMentorsById has been hit!");
    let mentorIds = req.body.mentorIds;
   try
   {
     const mentorDetails = await mentorModel.find({ '_id': mentorIds})
     console.log(mentorDetails);
     res.status(200).send(mentorDetails);
   }
   catch(err)
   {
     console.log(err);
     res.status(500).send(err);
   }
 
}