
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let favoriteschema = new Schema({
	trails: []
});


let Favorites = mongoose.model('Favorites', favoriteschema);

module.exports = Favorites;