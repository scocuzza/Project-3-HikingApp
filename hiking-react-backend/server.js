////mongodb+srv://testuser:<password>@cluster0.3jzzl.mongodb.net/<dbname>?retryWrites=true&w=majority
//// Require necessary NPM packages
//const express = require('express');
//const mongoose = require('mongoose');
//const app = express();
//const cors = require('cors');
//const bodyParser = require("body-parser");
//const passport = require('passport');
//const jwt = require('jsonwebtoken');
//const expressJwt = require('express-jwt');
//
//
//
//
//var corsOptions = {
//	origin: "http://localhost:8081"
//};
//
//app.use(cors(corsOptions));
//
//// parse requests of content-type - application/json
//app.use(bodyParser.json());
//
//// parse requests of content-type - application/x-www-form-urlencoded
//app.use(bodyParser.urlencoded({ extended: true }));
//
//
//
//
////
////// Require Route Files
//////const indexRouter = require('./app/routes/index');
//////const articlesRouter = require('./app/routes/articles');
////
////// Require DB Configuration File
//const db = require('./config/db');
////
////// Establish Database Connection
//////mongoose.connect(db, { useNewUrlParser: true });
////mongoose.connection.once('open', () => {
////console.log('Connected to Mongo');
////});
////
////// Instantiate Express Application Object
////const app = express();
////
////// Define PORT for the API to run on
//const port = process.env.PORT || 8080;
//const reactPort = 3001;
//
////
/////*** Middleware ***/
////
////// Add `bodyParser` middleware which will parse JSON requests
////// into JS objects before they reach the route files.
//////
////// The method `.use` sets up middleware for the Express application
//app.use(express.json());
////
////// Set CORS headers on response from this API using the `cors` NPM package.
////app.use(cors({ origin: process.env.CLIENT_ORIGIN || `http://localhost:${reactPort}` }));
//
//// simple route
//app.get("/", (req, res) => {
//	res.json({ message: "Welcome to Hiking application." });
//});
//
////
/////*** Routes ***/
////
////// Mount imported Routers
//////app.use(indexRouter);
//////app.use(articlesRouter);
////
////// Start the server to listen for requests on a given port
//app.listen(port, () => {
//	console.log(`Hiking App is listening on port ${port}`);
//});
//
//
