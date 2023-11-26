const express = require('express');
const app = express();
const port = 3003;

app.get('/', (req, res) => {
  res.send('Hello World from Microservice 3!');
});

app.listen(port, () => {
  console.log(`Microservice 3 listening at http://localhost:${port}`);
});