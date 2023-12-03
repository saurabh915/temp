const express = require('express');
const app = express();
const PORT = 3000;

// This middleware will not allow the
// request to go beyond it
app.use(function (req, res, next) {
	console.log("Middleware called")
	next();
});

// Requests will never reach this route
app.get('/user', function (req, res) {
	console.log("/user request called");
	res.send('Welcome to GeeksforGeeks');
});

app.listen(PORT, function(err){
	if (err) console.log(err);
	console.log("Server listening on PORT", PORT);
});

//The app.use() function is used to mount the specified middleware function(s) at the path which is being specified. It is mostly used to set up middleware for your application. 
//Parameters:
// path: It is the path for which the middleware function is being called. It can be a string representing a path or path pattern or a regular expression pattern to match the paths.
// callback: It is a middleware function or a series/array of middleware functions.
//Now open your browser and go to http://localhost:3000/user 