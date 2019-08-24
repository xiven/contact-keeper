const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const validate = require('../middleware/validate');
const authController = require('../controllers/auth');

// @route    GET api/auth
// @desc     Get logged in user
// @access   Private
router.get('/', auth, authController.getLoggedInUser);

// @route    POST api/auth
// @desc     Auth user & get token
// @access   Public
router.post('/', validate('authUser'), authController.authUser);

module.exports = router;
