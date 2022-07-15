// sending bear tokens??
const jwt = require('jsonwebtoken');

const authenticationJWT = () => async (req, res, next) => {
  console.log(req.headers);
  try {
    const authToken = req.headers.Authorization.replace('Bearer ', '');
    jwt.verify(authToken, process.env.JWT_SECRET);
    next();
  } catch (err) {
    console.log('error:', err);
    return res.json({ message: 'JWT expired' });
  }
};
module.exports = authenticationJWT;
