const mongoose = require ("mongoose");
const Schema = mongoose.Schema;
const mentorModel = require("./mentorslist");
const studentModel = require("./studentslist");



const mentorStudentSchema = new Schema ({
    
    mentorId:{
        type: Schema.Types.ObjectId,
        ref: mentorModel,
        required : true
    },
 
    studentId:{
      type:Schema.Types.ObjectId,
      ref: studentModel,
      required : true
  },

  isExist :{
    type: Boolean,
    required: true

  }

});

const mentorStudentModel = mongoose.model("mentor_student",mentorStudentSchema);


module.exports = mentorStudentModel ;
