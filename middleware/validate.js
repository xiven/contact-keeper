const { check } = require('express-validator');

module.exports = method => {
  switch (method) {
    case 'createUser': {
      return [
        check('name', 'Please add name')
          .not()
          .isEmpty(),
        check('email', 'Please include a valid email').isEmail(),
        check(
          'password',
          'Please enter a password with 6 or more characters'
        ).isLength({
          min: 6
        })
      ];
    }
    case 'createContact': {
      return [
        check('name', 'Name is required')
          .not()
          .isEmpty()
      ];
    }
    case 'authUser': {
      return [
        check('email', 'Please include a valid email').isEmail(),
        check('password', 'Password is required').exists()
      ];
    }
  }
};
