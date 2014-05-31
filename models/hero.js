var mongoose = require('mongoose')
    , Schema = mongoose.Schema;

var HeroSchema = new Schema({
    timeCreated : { type:Date, default: Date.now}
    , timeUpdated : { type:Date, default: Date.now}
    , timeStamp : { type:Date, default: Date.now}
    , username : String
    , name : String
    , level : Number
    , exp : Number
    , health : Number
    , maxHealth : Number
    , attack : Number
    , bonus : Number
});
