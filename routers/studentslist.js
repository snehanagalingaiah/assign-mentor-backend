const express = require('express');
const router = express.Router();
const studentModule = require("../modules/studentslist");

router.post("/createstudent", studentModule.createStudent);

router.get("/getstudents", studentModule.getStudents);

router.post("/getstudentsbyid", studentModule.getStudentsById)


module.exports = router;
