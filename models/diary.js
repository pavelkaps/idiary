/**
 * Created by Паша on 07.02.2017.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var diarySchema = new Schema({
    notes: [{
        subject: {
            type: Schema.Types.ObjectId,
            ref: 'Subject'
        },
        grades: Number,
        comment: String
    }],

    children: {
        type: Schema.Types.ObjectId,
        ref: 'Child'
    }
});

var Diary = mongoose.model('Diary', diarySchema);

module.exports = Diary;