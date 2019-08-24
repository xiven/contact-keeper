const jwt = require('jsonwebtoken');
const config = require('config');

signJWT = async user => {
  const payload = {
    user: {
      id: user.id
    }
  };

  try {
    const signedToken = await jwt.sign(payload, config.get('jwtSecret'), {
      expiresIn: 360000
    });
    return signedToken;
  } catch (err) {
    throw err;
  }
};

module.exports = { signJWT };
