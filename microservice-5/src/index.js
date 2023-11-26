// Import necessary modules
const express = require('express');
const app = express();
const port = 3005;

// Define routes
app.get('/', (req, res) => {
  res.send('Hello from Microservice 5!');
});

// Start the server
app.listen(port, () => {
  console.log(`Microservice 5 listening at http://localhost:${port}`);
});