/**
 * Created by Паша on 11.10.2016.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var bookSchema = new Schema({
    title: String,
    year: Number,
    author: String
});

// the schema is useless so far
// we need to create a models using it
var Book = mongoose.model('Book', bookSchema);

// make this available to our users in our Node applications
module.exports = Book;