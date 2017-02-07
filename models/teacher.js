/**
 * Created by Паша on 07.02.2017.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var teacherSchema = new Schema({
    password: Number,
    email: String,
    name: String,
    lastName: String,
    phoneNumber: Number,
    subjects: [{ type: Schema.Types.ObjectId, ref: 'Subject' }]
});

var Teacher = mongoose.model('Teacher', teacherSchema);

module.exports = Teacher;