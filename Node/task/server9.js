const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const token = authHeader.split(' ')[1];

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
      if (err) {
        return res.status(403).json({ message: 'Access denied' });
      }

      req.user = user;
      next();
    });
  } else {
    res.status(401).json({ message: 'Access denied. No token provided.' });
  }
};