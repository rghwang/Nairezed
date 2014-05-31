var mongoose = require('mongoose')
    , Schema = mongoose.Schema;

var MonsterSchema = new Schema({
    //timeCreated: { type: Date, default: Date.now }
    //, id: String
    //, health : Number
    maxHealth: Number
    , level: Number
    , attack: Number
    , expBonus: Number
    , type : String
    , fromLevel : Number
    , toLevel : Number
});
