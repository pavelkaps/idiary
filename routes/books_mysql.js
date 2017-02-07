/**
 * Created by Паша on 26.10.2016.
 */
var express = require('express');
var router = express.Router();

var Book = require('../models/book');
var mysql      = require('mysql');

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'root',
    database : 'store_database'
});

connection.connect();

router.get('/books', function(req, res, next) {
    connection.query('SELECT * from book', function(err, rows, fields) {
        if (!err)
            res.send(rows);
        else
            res.send(err);
    });
});

router.get('/books/:id', function(req, res, next) {
    connection.query('SELECT title, year, author,_id, genre_id from book WHERE _id = ?', [req.params.id], function (err, result) {
        if (!err)
            res.send(result[0]);
        else
            res.send(err);
    })
});

router.post('/books', function(req, res, next) {
    var newBook = {
        title: req.body.title,
        author: req.body.author,
        year: req.body.year
    };

    connection.query('INSERT INTO book SET ?', newBook, function(err, result) {
        if (!err) {
            connection.query('SELECT * from book WHERE _id = ?', [result.insertId], function (err, result) {
                if (!err)
                    res.send(result);
                else
                    res.send(err);
            })
        }
        else
            res.send(err);
    });

});

router.delete('/books/:id', function(req, res, next) {
    connection.query(
        'DELETE FROM book WHERE _id = ?',
        [req.params.id],
        function (err, result) {
            if (err) throw err;
            res.send(result);
        }
    );
});

router.put('/books/:id', function(req, res, next) {
    connection.query(
        'UPDATE book SET title = ?, year = ?, author = ? Where _id = ?',
        [req.body.title, req.body.year, req.body.author, req.params.id],
        function (err, result) {
            if (err) throw err;
            connection.query('SELECT * from book WHERE _id = ?', [req.params.id], function (err, result) {
                if (!err)
                    res.send(result);
                else
                    res.send(err);
            })

        }
    );
});

module.exports = router;