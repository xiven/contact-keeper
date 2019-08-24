const express = require('express');
const router = express.Router();
const validate = require('../middleware/validate');
const userController = require('../controllers/user');

// @route    POST api/users
// @desc     Register a user
// @access   Public
router.post('/', validate('createUser'), userController.createUser);

module.exports = router;
