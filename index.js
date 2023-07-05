const express = require("express");
const dotenv = require("dotenv");
const mongo = require("./connect");
const studentRouter = require("./routers/studentslist");
const mentorRouter = require("./routers/mentorslist");
const mentorStudentRouter = require("./routers/mentor_student");
var cors = require("cors");


dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
app.options('*',cors());
var allowCrossDomain = function(req,res,next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();  
}
app.use(allowCrossDomain);

 mongo.connectdb();

 app.use("/", (req,res,next) =>{
 	console.log("Middleware");
 	next();
 });

 app.use("/students",studentRouter)
 app.use("/mentors",mentorRouter)
 app.use("/mentorstudent",mentorStudentRouter);

 app.listen(process.env.PORT)
