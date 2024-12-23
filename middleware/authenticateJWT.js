const jwtUtils = require('../utils/jwtUtils');

const authenticateJWT = (req, res, next) => {
  const token = req.header('Authorization')?.split(' ')[1]; 

  if (!token) {
    return res.sendStatus(401); 
  }

  try {
    const user = jwtUtils.verifyAccessToken(token);
    req.user = user;
    next();
  } catch (error) {
    return res.sendStatus(403); 
  }
};

module.exports = authenticateJWT;
