import express from 'express';

const app = express();
const port = 3000;

app.use(express.json());

const tasks = [
  import('./task/server1.js'),
  import('./task/server2.js'),
  import('./task/server3.js'),
  import('./task/server4.js'),
  import('./task/server5.js'),
  import('./task/server6.js'),
  import('./task/server7.js'),
  import('./task/server8.js'),
  import('./task/server9.js'),
  import('./task/server10.js')
];

for await (const task of tasks) {
  task.default(app); 
}

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
