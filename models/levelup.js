var mongoose = require('mongoose')
    , Schema = mongoose.Schema;

var LevelupSchema = new Schema({
    exp: Number
    ,level: Number
});
