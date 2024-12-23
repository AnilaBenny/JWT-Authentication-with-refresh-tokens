const express = require('express');
const authenticateJWT = require('../middleware/authenticateJWT');

const router = express.Router();


router.get('/secure', authenticateJWT, (req, res) => {
  res.send(`Welcome ${req.user.username}, this is a secure route.`);
});

module.exports = router;
