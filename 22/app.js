//  program for demonstrating any 5 functions of request object in Express.js

// File: app.js

const express = require('express');
const app = express();
const port = 3000;

// Middleware to log requests
app.use((req, res, next) => {
  console.log(`Received a ${req.method} request for ${req.url}`);
  next();
});

// 1. Accessing Query Parameters
app.get('/query', (req, res) => {
  const name = req.query.name || 'Guest';
  res.send(`Hello, ${name}!`);
});

// 2. Accessing Route Parameters
app.get('/user/:id', (req, res) => {
  const userId = req.params.id;
  res.send(`User ID: ${userId}`);
});

// 3. Accessing Request Headers
app.get('/headers', (req, res) => {
  const userAgent = req.get('User-Agent');
  res.send(`User Agent: ${userAgent}`);
});

// 4. Checking Request Method
app.post('/create', (req, res) => {
  res.send('This is a POST request');
});

// 5. Checking if Request is Secure (HTTPS)
app.all('/secure', (req, res) => {
  const isSecure = req.secure ? 'Secure' : 'Not Secure';
  res.send(`This connection is ${isSecure}`);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

// In this example:

// Accessing Query Parameters (req.query):

// Endpoint: /query?name=John
// Retrieves the value of the name query parameter.
// Accessing Route Parameters (req.params):

// Endpoint: /user/123
// Retrieves the value of the id route parameter.
// Accessing Request Headers (req.get):

// Endpoint: /headers
// Retrieves the value of the User-Agent header.
// Checking Request Method (req.method):

// Endpoint: /create (POST request)
// Checks if the request method is POST.
// Checking if Request is Secure (req.secure):

// Endpoint: /secure
// Checks if the connection is secure (HTTPS).
// These examples showcase some common functionalities of the request object in Express.js. Feel free to customize and build upon these based on your specific use case and requirements.