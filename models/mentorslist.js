const mongoose = require ("mongoose");
const Schema = mongoose.Schema;

const mentorSchema = new Schema ({
    
    mentorName:{
        type:String,
        maxlength: 15,
        required : true
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


});

const mentorModel = mongoose.model("mentorslist",mentorSchema);

module.exports = mentorModel ;

