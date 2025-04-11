const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();

// Custom role-checking middleware
const roleChecker = (requiredRole) => {
  return (req, res, next) => {
    const token = req.headers['x-access-token'] || req.headers.authorization;
    if (!token) {
      return res.status(401).send({ message: 'No token provided.' });
    }

    jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
      if (err) {
        return res.status(401).send({ message: 'Invalid token.' });
      }

      if (decoded.role !== requiredRole) {
        return res.status(403).send({ message: 'Forbidden.' });
      }

      next();
    });
  };
};

// Restrict access to routes based on roles
app.get('/admin-only', roleChecker('admin'), (req, res) => {
  res.send({ message: 'Welcome, admin!' });
});

app.get('/user-only', roleChecker('user'), (req, res) => {
  res.send({ message: 'Welcome, user!' });
});