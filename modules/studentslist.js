
const studentModel = require("../models/studentslist");

module.exports.createStudent = async (req,res,next) => {

    console.log("API create student hit");

    const studentData = new studentModel({...req.body.student});
    try {
        const createdResponse = await studentData.save();
        console.log(createdResponse);
        res.status(200).send(createdResponse)
    } catch(err) {
        console.error(err);
        res.status(500).send(err);
    }
}

module.exports.getStudents = async (req,res,next) => {
	console.log("API getStudents has been hit!");
    try {
        const students = await studentModel.find();
        res.status(200).send(students)
    }catch(err) {
        console.error(err);
        res.status(500).send(err);
    }
}

module.exports.getStudentsById = async (req,res,next) => {
    console.log("API getStudentsById has been hit!");
    let studentIds = req.body.studentIds;
    console.log( req)
   try
   {
     const studentDetails = await studentModel.find({ '_id': studentIds})
     console.log(studentDetails);
     res.status(200).send(studentDetails);
   }
   catch(err)
   {
     console.log(err);
     res.status(500).send(err);
   }
 
}

