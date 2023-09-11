const express = require('express');
const router = express.Router();
const userCrtrl = require('../controllers/userController');

router.post('/signup', userCrtrl.signup);
router.post('/login', userCrtrl.login);

module.exports = router;