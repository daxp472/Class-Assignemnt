const express = require('express');
const app = express();
const port = 3002;

app.use(express.json());

const users = [
    { id: 1, name: 'Dax Patel', email: 'dax@example.com' },
    { id: 2, name: 'Dev Patel', email: 'dev@example.com' },
    { id: 3, name: 'Kalp Patel', email: 'kalp@example.com' }
];

app.get('/users', (req, res) => {
    res.json(users);
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});