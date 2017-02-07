/**
 * Created by Паша on 07.02.2017.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var adminSchema = new Schema({
    password: String,
    email: String,

    name: String,
    lastName: String
});

var Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;