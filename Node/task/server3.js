const express = require('express');
const app = express();
const port = 3002;

let users = [];

app.use(express.json());

app.post('/users', (req, res) => {
    const { name, email } = req.body;
    const user = { name, email };
    users.push(user);
    res.send(`User added successfully: ${name} - ${email}`);
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});