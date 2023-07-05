const express = require('express');
const router = express.Router();
const mentorModule = require("../modules/mentorslist");

router.post("/creatementor", mentorModule.createMentor);

router.get('/getmentors', mentorModule.getMentors);

router.post('/getmentorsbyid', mentorModule.getMentorsById);

module.exports = router;