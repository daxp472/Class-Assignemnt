const express = require('express');
const app = express();
const port = 3004;

let users = [
  { id: 1, name: 'Dax Patel', email: 'dax@example.com' },
  { id: 2, name: 'Dev Patel', email: 'dev@example.com' },
];


app.use(express.json());


app.post('/users', (req, res) => {
  const { name, email } = req.body;
  const newUser = { id: users.length + 1, name, email };
  users.push(newUser);
  res.status(201).send(newUser);
});


app.get('/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const user = users.find((user) => user.id === id);
  if (!user) {
    res.status(404).send({ message: 'User not found' });
  } else {
    res.send(user);
  }
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});