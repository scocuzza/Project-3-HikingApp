const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
let passport = require('passport');
let crypto = require('crypto');
let LocalStrategy = require('passport-local').Strategy;
const PORT = process.env.PORT || 5000;
const reactPort = 3000;
const cors = require('cors');


const MongoStore = require('connect-mongo')(session);
// Set CORS headers on response from this API using the `cors` NPM package.


require('dotenv').config();

const app = express();
// Set CORS headers on response from this API using the `cors` NPM package.

app.use(express.json());
app.use(express.urlencoded({ extended: true }));



// Set CORS headers on response from this API using the `cors` NPM package.
app.use(cors({ origin: process.env.CLIENT_ORIGIN || `http://localhost:${reactPort}` }));
/**
 * -------------- DATABASE ----------------
 */



const conn = "mongodb+srv://testuser:Helloworld100@cluster0.3jzzl.mongodb.net/hikingapp?retryWrites=true&w=majority";

//const conn = process.env.DB_STRING;

const connection = mongoose.createConnection(conn, {
	useNewUrlParser: true,
	useUnifiedTopology: true
});


connection.on('connecting', () => {
	console.log('connected');
});


const UserSchema = new mongoose.Schema({
	username: String,
	hash: String,
	salt: String,
	fav: [userFavSchema]
},
	{ timestamps: true });


const User = connection.model('User', UserSchema);



const UserFavSchema = new mongoose.Schema(
	{
		favName: String,
	},
	{ timestamps: true }
);


const UserFav = connection.model('UserFav', UserFavSchema);

/**
 * This function is called when the `passport.authenticate()` method is called.
 * 
 * If a user is found an validated, a callback is called (`cb(null, user)`) with the user
 * object.  The user object is then serialized with `passport.serializeUser()` and added to the 
 * `req.session.passport` object. 
 */
passport.use(new LocalStrategy(
	function (username, password, cb) {
		User.findOne({ username: username })
			.then((user) => {

				if (!user) { return cb(null, false) }

				// Function defined at bottom of app.js
				const isValid = validPassword(password, user.hash, user.salt);

				if (isValid) {
					return cb(null, user);
				} else {
					return cb(null, false);
				}
			})
			.catch((err) => {
				cb(err);
			});
	}));

/**
 * This function is used in conjunction with the `passport.authenticate()` method.  
 */
passport.serializeUser(function (user, cb) {
	cb(null, user.id);
});


passport.deserializeUser(function (id, cb) {
	User.findById(id, function (err, user) {
		console.log('found user', user)
		if (err) { return cb(err); }
		cb(null, user);
	});
});



const sessionStore = new MongoStore({ mongooseConnection: connection, collection: 'sessions' })




app.options('*', cors())
app.use(session({
	//secret: process.env.SECRET,
	secret: 'some secret',
	resave: false,
	saveUninitialized: true,
	store: sessionStore,
	cookie: {
		maxAge: 1000 * 60 * 60 * 24 // Equals 1 day (1 day * 24 hr/1 day * 60 min/1 hr * 60 sec/1 min * 1000 ms / 1 sec)
	}
}));





app.use(passport.initialize());
app.use(passport.session());



/**
 * -------------- ROUTES ----------------
 */

app.get('/', (req, res, next) => {
	res.send('<h1>Home</h1><p>Please <a href="/register">register</a></p>');
});


app.get('/login', (req, res, next) => {

	const form = '<h1>Login Page</h1><form method="POST" action="/login">\
    Enter Username:<br><input type="text" name="username">\
    <br>Enter Password:<br><input type="password" name="password">\
    <br><br><input type="submit" value="Submit"></form>';

	res.send(form);

});


app.post('/login', passport.authenticate('local', { failureRedirect: '/login-failure', successRedirect: '/login-success' }), (err, req, res, next) => {
	console.log('request===>', req);
	console.log(res)
	if (err) next(err);
});

app.get('/register', (req, res, next) => {

	const form = '<h1>Register Page</h1><form method="post" action="register">\
                    Enter Username:<br><input type="text" name="username">\
                    <br>Enter Password:<br><input type="password" name="password">\
                    <br><br><input type="submit" value="Submit"></form>';

	res.send(form);

});

app.post('/register', (req, res, next) => {

	const saltHash = genPassword(req.body.password);

	const salt = saltHash.salt;
	const hash = saltHash.hash;

	const newUser = new User({
		username: req.body.username,
		hash: hash,
		salt: salt
	});

	newUser.save()
		.then((user) => {
			console.log(user);
		});

	res.redirect('/login');

});


app.get('/protected-route', (req, res, next) => {


	if (req.isAuthenticated()) {
		console.log('i am authenticated')
		res.redirect('/');

		//res.send('<h1>You are authenticated</h1><p><a href="/logout">Logout and reload</a></p>');
	} else {
		console.log('i am not authenticated')
		res.redirect('/login');

		//res.send('<h1>You are not authenticated</h1><p><a href="/login">Login</a></p>');
	}
});

// Visiting this route logs the user out
app.get('/logout', (req, res, next) => {
	req.logout();
	res.redirect('/protected-route');
});

app.get('/login-success', (req, res, next) => {
	//console.log('request===>', req)
	console.log('response===>', res)
	console.log('request======>', req)
	//res.redirect('/');
	//app.get('/login-success', (req, res, next) => {
	res.send(`<p>You successfully logged in. --> <a href="/protected-route">Go to protected route  )</a> ${req.body.username}</p>`);
});

app.get('/login-failure', (req, res, next) => {
	res.send('You entered the wrong password.');
});




// CREATE TWEET EMBEDDED IN USER
app.post('/:userId/fav', (req, res) => {
	console.log(req.body);
	// store new tweet in memory with data from request body
	const newFav = new Tweet({ favText: req.body.favText });
	// find user in db by id and add new tweet
	User.findById(req.params.userId, (error, user) => {
		user.fav.push(newFav);
		user.save((err, user) => {
			res.send(`<p> Fav spot added- ${req.body.favText}</p>`);
		});
	});
});

app.use(cors('http://localhost:3000'));


/**
 * -------------- SERVER ----------------
 */

// Server listens on http://localhost:5000
//app.listen(5000);

app.listen(PORT, () => {
	console.log(`server is running on port ${PORT}`);
});




/**
 * -------------- HELPER FUNCTIONS ----------------
 */


function validPassword(password, hash, salt) {
	var hashVerify = crypto.pbkdf2Sync(password, salt, 10000, 64, 'sha512').toString('hex');
	return hash === hashVerify;
}


function genPassword(password) {
	var salt = crypto.randomBytes(32).toString('hex');
	var genHash = crypto.pbkdf2Sync(password, salt, 10000, 64, 'sha512').toString('hex');

	return {
		salt: salt,
		hash: genHash
	};
}
