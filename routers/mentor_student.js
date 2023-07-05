const express = require('express');
const router = express.Router();
const mentorStudentModule = require("../modules/mentor_student");

router.post("/assignmentor", mentorStudentModule.assignMentor);

router.post("/changementor", mentorStudentModule.changeMentor);

router.get("/get", mentorStudentModule.getMentorStudent);

router.get("/getstudents/:id", mentorStudentModule.getStudentsByMentor);

router.get("/getmentors/:id", mentorStudentModule.getMentorsByStudent);

module.exports = router;