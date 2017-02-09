/**
 * Created by Паша on 07.02.2017.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var classSchema = new Schema({
    title: String,
    childrens: [{
        type: Schema.Types.ObjectId,
        ref: 'Child'
    }]
});

var Class = mongoose.model('Class', classSchema);

module.exports = Class;