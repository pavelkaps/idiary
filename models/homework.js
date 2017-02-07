/**
 * Created by Паша on 07.02.2017.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var homeworkSchema = new Schema({
    title: String,
    description: String,
    subject: {
        type: Schema.Types.ObjectId,
        ref: 'Subject'
    },

    children: {
        type: Schema.Types.ObjectId,
        ref: 'Child'
    }
});

var HomeWork = mongoose.model('HomeWork', homeworkSchema);

module.exports = HomeWork;