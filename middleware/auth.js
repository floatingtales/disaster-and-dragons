const jwt = require('jsonwebtoken');

const authenticateJWT = () => async (req, res, next) => {
  console.log(req.url);
  console.log('running in auth.js middleware');
  try {
    const authToken = req.header('Authorization').replace('Bearer ', '');
    const verifiedToken = jwt.verify(authToken, process.env.JWT_SECRET);
    req.user = verifiedToken;
    return next();
  } catch (err) {
    console.log(err);
    return res.json({ message: 'JWT expired' });
  }
};
module.exports = authenticateJWT;
