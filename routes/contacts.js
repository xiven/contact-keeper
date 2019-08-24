const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const validate = require('../middleware/validate');
const contactController = require('../controllers/contact');

// @route    GET api/contacts
// @desc     Get all users contacts
// @access   Public
router.get('/', auth, contactController.getUserContacts);

// @route    POST api/contacts
// @desc     Add new contact
// @access   Private
router.post(
  '/',
  [auth, validate('createContact')],
  contactController.createContact
);

// @route    PUT api/contacts/:id
// @desc     Update contact
// @access   Private
router.put('/:id', auth, contactController.updateContact);

// @route    DELETE api/contacts/:id
// @desc     Delete contact
// @access   Private
router.delete('/:id', auth, contactController.deleteContact);

module.exports = router;
