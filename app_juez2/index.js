const express = require('express');
const app = express();
const port = 3001;

app.get('/', (req, res) => {
  res.send('Hello World from Microservice 1!');
});

app.listen(port, () => {
  console.log(`Microservice 1 listening at http://localhost:${port}`);
});