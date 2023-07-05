
const mentorStudentModel = require("../models/mentor_student");

module.exports.assignMentor =  (req,res,next) => {
	
	console.log("assign mentor api has been hit. this is the req body",req.body.mentor_student);
	
	let reqData = req.body.mentor_student;
	var resarray =[]
	
	reqData.map( async(data) =>{
    let mentorStudentData = new mentorStudentModel(data);
	
   try {
        const createdResponse = await mentorStudentData.save();
        resarray.push(createdResponse);
		//console.log("res array", resarray);'
		if(resarray.length == reqData.length)
			res.send(resarray);
    } catch(err) {
        console.error(err);
        res.status(500).send(err);
    }
	})

}

module.exports.changeMentor =  async (req,res,next) => {
	
	console.log("change mentor api has been hit. this is the req body",req.body.mentor_student_obj);

   try
   {
	const oldData = await mentorStudentModel.findOne({studentId:req.body.mentor_student_obj.studentId, isExist:true});
	if(oldData)
	{
		console.log("old data is ",typeof oldData._id )
		const updatedOldData = await mentorStudentModel.findByIdAndUpdate({_id:oldData._id},{isExist:false},{new:true});
		console.log("updatedOldData is", updatedOldData)
	}

      const mentorStudentData = new mentorStudentModel(req.body.mentor_student_obj);
      const createdResponse = await mentorStudentData.save();
	  res.status(200).send(createdResponse);
   }
   catch(err)
   {
   	console.log(err);
   	res.status(500).send(err)
   }
	
}

module.exports.getMentorStudent = async (req,res,next) => {
	console.log("API getMentorStudent has been hit!");
    try {
        const mentors_students = await mentorStudentModel.find({isExist:true},{studentId:1, _id:0});
        res.status(200).send(mentors_students)
    }catch(err) {
        console.error(err);
        res.status(500).send(err);
    }
}

module.exports.getStudentsByMentor = async (req,res,next) => {
    console.log("API getStudentsByMentor has been hit!");
    try 
    {
        const students = await mentorStudentModel.find({mentorId:req.params.id, isExist:true});
        res.status(200).send(students)
    }
    catch(err) {
        console.error(err);
        res.status(500).send(err);
    }
}

module.exports.getMentorsByStudent = async (req,res,next) => {
    console.log("API getMentorsByStudent has been hit!");
    try 
    {
        const mentors = await mentorStudentModel.find({studentId:req.params.id});
        res.status(200).send(mentors)
    }
    catch(err) 
    {
        console.error(err);
        res.status(500).send(err);
    }
}