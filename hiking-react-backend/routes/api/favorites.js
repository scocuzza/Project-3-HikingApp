const mongoose = require('mongoose');
const passport = require('passport');
const router = require('express').Router();
const auth = require('../auth');
const Favorites = mongoose.model('Favorites');
const Users = mongoose.model('Users');

//POST New favorite to User
router.post('/', auth.required, (req, res, next) => {
    
})

//Get Users Favorites
router.get('/', auth.required, (req, res, next) => {
    
})

module.exports = router;