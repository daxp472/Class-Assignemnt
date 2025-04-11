app.delete('/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const userIndex = users.findIndex(user => user.id === id);

  if (userIndex === -1) {
    res.status(404).send({ message: 'User not found' });
  } else {
    users.splice(userIndex, 1);
    res.status(204).send();
  }
});