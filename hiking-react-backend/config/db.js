//const mongoose = require('mongoose');
//const MongoClient = require('mongodb').MongoClient;
//const uri = "mongodb+srv://testuser:Helloworld100@cluster0.3jzzl.mongodb.net/<dbname>?retryWrites=true&w=majority";
//const client = new MongoClient(uri, { useNewUrlParser: true });
//client.connect(err => {
//	const collection = client.db("test").collection("devices");
//	console.log('Connected to Mongo---cloud');
//	// perform actions on the collection object
//	client.close();
//});
//Schema = client.Schema;
//
//module.exports = function () {
//
//
//
//	let UserSchema = new Schema({
//		email: {
//			type: String, required: true,
//			trim: true, unique: true,
//			match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
//		},
//		twitterProvider: {
//			type: {
//				id: String,
//				token: String
//			},
//			select: false
//		}
//	});
//	UserSchema.set('toJSON', { getters: true, virtuals: true });
//	UserSchema.statics.upsertTwitterUser = function (token, tokenSecret, profile, cb) {
//		var that = this;
//		return this.findOne({
//			'twitterProvider.id': profile.id
//		}, function (err, user) {
//			// no user was found, lets create a new one
//			if (!user) {
//				var newUser = new that({
//					email: profile.emails[0].value,
//					twitterProvider: {
//						id: profile.id,
//						token: token,
//						tokenSecret: tokenSecret
//					}
//				});
//
//				newUser.save(function (error, savedUser) {
//					if (error) {
//						console.log(error);
//					}
//					return cb(error, savedUser);
//				});
//			} else {
//				return cb(err, user);
//			}
//		});
//	};
//	client.model('User', UserSchema);
//}
//
//// Creating a base name for the MongoDB
//const mongooseBaseName = 'hiking-app';
//
//// Create the MongoDB URI for Development and Test
//const database = {
//	development: `mongodb://localhost/${mongooseBaseName}-development`,
//	test: `mongodb://localhost/${mongooseBaseName}-test`,
//};
//
//
//
//// Identify if development environment is Test or Development
//// select DB based on wether a test file was executed before `server.js`
//const localDB = process.env.TESTENV ? database.test : database.development;
//
//// Environment variable MONGODB_URL will be available in
//// Heroku production environment, otherwise use Test or Development DB
//const currentDB = process.env.MONGODB_URI || localDB;
//
//// Export the appropriate database based om the current environment
//module.exports = currentDB;
