const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const studentSchema = new Schema ({
    
    studentName:{
        type:String,
        maxlength: 15,
        required : true
    },

    age : {
        type: Number,
        min: 21,
        max: 32
    },
    
    contactNumber: {
        type: Number,
        validate: {
            validator: function(v) {
              return /^[6-9]\d{9}$/.test(v);
            },
            message: 'Please enter a valid mob number with 10 digits and whose first digit is either 6,7,8 or 9'
          },
    },

    city:{
        type: String,
        enum: ["Bengaluru", "Chennai", "Mumbai","Delhi" ],
    }
});

const studentModel = mongoose.model("studentslist",studentSchema);

module.exports = studentModel ;