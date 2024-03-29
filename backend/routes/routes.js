const express = require('express');
const router = express.Router();
const Controller=require('../controller/controller')
const emailController = require('../controller/contactEmailcontroller');


router.post('/send-email', emailController.sendEmail);
router.post('/calculate', Controller.calculate);

module.exports = router;
