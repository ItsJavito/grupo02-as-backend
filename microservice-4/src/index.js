// Import necessary modules
const express = require('express');
const app = express();
const port =  3004;

// Define routes
app.get('/', (req, res) => {
  res.send('Hello from Microservice 4!');
});

// Start the server
app.listen(port, () => {
  console.log(`Microservice 4 is listening at http://localhost:${port}`);
});