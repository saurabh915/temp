// File: app.js
// program for demonstrating any 5 functions of response object in Express.js

const express = require('express');
const app = express();
const port = 3000;

// 1. Sending Plain Text
app.get('/plaintext', (req, res) => {
  res.send('Hello, this is plain text!');
});

// 2. Sending JSON
app.get('/json', (req, res) => {
  const jsonData = { message: 'Hello, this is JSON!' };
  res.json(jsonData);
});

// 3. Redirecting
app.get('/redirect', (req, res) => {
  res.redirect('https://www.example.com');
});

// 4. Setting HTTP Status Code
app.get('/status', (req, res) => {
  res.status(404).send('Not Found');
});

// 5. Sending HTML
app.get('/html', (req, res) => {
  const htmlContent = '<h1>Hello, this is HTML!</h1>';
  res.send(htmlContent);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});




// In this example:

// Sending Plain Text (res.send):

// Endpoint: /plaintext
// Sends a simple plain text response.
// Sending JSON (res.json):

// Endpoint: /json
// Sends a JSON response.
// Redirecting (res.redirect):

// Endpoint: /redirect
// Redirects the client to another URL.
// Setting HTTP Status Code (res.status):

// Endpoint: /status
// Sets a custom HTTP status code.
// Sending HTML (res.send):

// Endpoint: /html
// Sends an HTML response.
// Make sure to install Express.js by running npm install express before running this code. You can then run the script with node app.js and access the different endpoints in your browser or using tools like cURL or Postman.