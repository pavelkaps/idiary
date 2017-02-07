/**
 * Created by Паша on 07.02.2017.
 */
var express = require('express');
var router = express.Router();

var HomeworkSchema = require('../models/class');

router.get('/', function (req, res, next) {
    HomeworkSchema.find({}).populate('children subject').exec(function (err, _home) {
        if (err) {
            res.send(err);
        } else {
            res.json(_home);
        }
    });
});

router.get('/:id', function (req, res, next) {
    HomeworkSchema.findOne({_id: req.params.id}).populate('children subject').exec(function (err, _home) {
        if (err) {
            res.send(err);
        } else {
            res.json(_home);
        }
    });
});

router.post('/', function (req, res, next) {
    var _home_work = HomeworkSchema({
        title: req.body.title,
        description: req.body.description,
        subject: req.body.subject,
        children: req.body.children
    });

    _home_work.save(function (err) {
        if (err) {
            res.send(err);
        } else {
            res.json(_home_work);
        }
    });
});

router.delete('/:id', function (req, res, next) {
    HomeworkSchema.findByIdAndRemove(req.params.id, function (err) {
        if (err) {
            res.send(err);
        } else {
            res.json({status: "success"});
        }
    });
});

router.put('/:id', function (req, res, next) {
    HomeworkSchema.findById(req.params.id, function (err, _home) {
        if (err) {
            res.send(err)
        } else {
            _home.title = req.body.title;
            _home.description = req.body.description;
            _home.subject = req.body.subject;
            _home.children = req.body.children;

            _home.save(function (err) {
                if (err) {
                    res.send(err);
                } else {
                    res.json(_home);
                }
            });
        }
    });
});

module.exports = router;