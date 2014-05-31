// Process db queries using mongolian module for mongodb.
// Main db name is 'nairezed', collection names are 'heroes'(data for each heroes), 'levelup'(requirement for levelup), 'monsters'(data for each monsters).
// 'db' module has user{username}, setUsername, newHero, updateHero, findHEro, findLevel, getMonsters
// Need to make easier to use this db.js for other apps. Is Mongolian easy enough for it?

var mongoose = require('mongoose');
var connectionString = process.env.CUSTOMCONNSTR_MONGOLAB_URI;

mongoose.connect(connectionString);
