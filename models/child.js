/**
 * Created by Паша on 07.02.2017.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var childSchema = new Schema({
    password: Number,
    email: String,

    name: String,
    lastName: String,
    phoneNumber: Number,
    
    parents: [{type: Schema.Types.ObjectId, ref: 'Child'}],
    diary: {type: Schema.Types.ObjectId, ref: 'Diary'}
});

var Child = mongoose.model('Child', childSchema);

module.exports = Child;