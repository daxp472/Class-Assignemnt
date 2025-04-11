export default function(app) {
    app.put('/users/:id', (req, res) => {
      const id = req.params.id;
      const user = req.body;
  
      const index = users.findIndex((user) => user.id === parseInt(id));
  
      if (index === -1) {
        res.status(404).send({ message: 'User not found' });
      } else {
        users[index] = { ...users[index], ...user, id: parseInt(id) };
        res.status(200).send(users[index]);
      }
    });
  }
  