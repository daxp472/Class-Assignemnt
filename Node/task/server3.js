import express from 'express';

const users = [];

export default function(app) {
    app.use(express.json());

    app.post('/users', (req, res) => {
        const { name, email } = req.body;
        const user = { name, email };
        users.push(user);
        res.send(`User added successfully: ${name} - ${email}`);
    });
}
