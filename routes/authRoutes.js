const express = require('express');
const jwtUtils = require('../utils/jwtUtils');

const router = express.Router();

const user = { id: 1, username: 'user1' };


router.post('/login', (req, res) => {
  const accessToken = jwtUtils.generateAccessToken(user);
  const refreshToken = jwtUtils.generateRefreshToken(user);
  console.log(refreshToken);
  
  res.json({ accessToken, refreshToken });
});


router.post('/refresh-token', (req, res) => {
    const { refreshToken } = req.body;
    console.log('Received Refresh Token:', refreshToken);
  
    if (!refreshToken) {
      return res.sendStatus(401); 
    }
  
    try {
      const user = jwtUtils.verifyRefreshToken(refreshToken);
      console.log('Verified User:', user);
      const newAccessToken = jwtUtils.generateAccessToken(user);
      res.json({ accessToken: newAccessToken });
    } catch (error) {
      console.error('Token verification failed:', error.message);
      return res.sendStatus(403); 
    }
  });
  

module.exports = router;
