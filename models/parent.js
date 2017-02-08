/**
 * Created by Паша on 07.02.2017.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var parentSchema = new Schema({
    password: String,
    email: String,

    name: String,
    lastName: String,
    phoneNumber: Number,
    childrens: [{ type: Schema.Types.ObjectId, ref: 'Child' }]
});

var Parent = mongoose.model('Parent', parentSchema);

module.exports = Parent;