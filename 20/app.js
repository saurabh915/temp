//program for demonstrating the concept of Express.js router

//

// const express = require('express');
// const app = express();
// const PORT = 3000;

// // Single routing
// const router = express.Router();

// router.get('/', function (req, res, next) {
// 	console.log("Router Working");
// 	res.end();
// })

// app.use(router);

// app.listen(PORT, function (err) {
// 	if (err) console.log(err);
// 	console.log("Server listening on PORT", PORT);
// });

//

const express = require('express');
const app = express();
const PORT = 3000;

// Multiple routing
const router1 = express.Router();
const router2 = express.Router();
const router3 = express.Router();

router1.get('/user', function (req, res, next) {
	console.log("User Router Working");
	res.end();
});

router2.get('/admin', function (req, res, next) {
	console.log("Admin Router Working");
	res.end();
});

router3.get('/student', function (req, res, next) {
	console.log("Student Router Working");
	res.end();
});

app.use(router1);
app.use(router2);
app.use(router3);

app.listen(PORT, function (err) {
	if (err) console.log(err);
	console.log("Server listening on PORT", PORT);
});

// The express.Router() function is used to create a new router object. This function is used when you want to create a new router object in your program to handle requests.
// Now make a GET request to http://localhost:3000/user, http://localhost:3000/admin, and http://localhost:3000/student, then you will see the following output on your console: