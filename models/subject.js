/**
 * Created by Паша on 07.02.2017.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var subjectSchema = new Schema({
    title: String,
    teacher: { 
        type: Schema.Types.ObjectId, 
        ref: 'Teacher'
    }
});

var Subject = mongoose.model('Subject', subjectSchema);

module.exports = Subject;