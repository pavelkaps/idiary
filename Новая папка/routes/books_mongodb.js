/**
 * Created by Паша on 11.10.2016.
 */
var express = require('express');
var router = express.Router();

var Book = require('../models/book');


router.get('/books', function(req, res, next) {
    Book.find({}, function(err, books) {
        if (err) {
            res.send(err);
        } else {
            res.json(books);
        }
    });
});

router.get('/books/:id', function(req, res, next) {

    Book.findById(req.params.id, function(err, book) {
        if (err) {
            res.send(err);
        } else {
            res.json(book);
        }
    });
});

router.post('/books', function(req, res, next) {
    var newBook = Book({
        title: req.body.title,
        year: req.body.year,
        author: req.body.author
    });

    newBook.save(function(err) {
        if (err){
            res.send(err);
        }else{
            res.send(JSON.stringify(newBook));
        }
    });
});

router.delete('/books/:id', function(req, res, next) {
    Book.findByIdAndRemove(req.params.id, function(err) {
        if (err){
            res.send(err);
        }else{
            res.send('OK!');
        }
    });
});

router.put('/books/:id', function(req, res, next) {

    Book.findById(req.params.id, function(err, book) {
        if (err){
            res.send(err)
        }else {
            book.title = req.body.title;
            book.year = req.body.year;
            book.author = req.body.author;

            book.save(function (err) {
                if (err) {
                    res.send(err);
                } else {
                    res.send(book);
                }

            });
        }
    });
});

module.exports = router;