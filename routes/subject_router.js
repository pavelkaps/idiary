/**
 * Created by Паша on 07.02.2017.
 */
var express = require('express');
var router = express.Router();

var SubjectSchema = require('../models/class');

router.get('/', function (req, res, next) {
    SubjectSchema.find({}).populate('teacher').exec(function (err, sebjects) {
        if (err) {
            res.send(err);
        } else {
            res.json(sebjects);
        }
    });
});

router.get('/:id', function (req, res, next) {
    SubjectSchema.findOne({_id: req.params.id}).populate('teacher').exec(function (err, subject) {
        if (err) {
            res.send(err);
        } else {
            res.json(subject);
        }
    });
});

router.post('/', function (req, res, next) {
    var subject = SubjectSchema({
        title: req.body.title,
        teacher: req.body.teacher
    });

    subject.save(function (err) {
        if (err) {
            res.send(err);
        } else {
            res.json(subject);
        }
    });
});

router.delete('/:id', function (req, res, next) {
    SubjectSchema.findByIdAndRemove(req.params.id, function (err) {
        if (err) {
            res.send(err);
        } else {
            res.json({status: "success"});
        }
    });
});

router.put('/:id', function (req, res, next) {
    SubjectSchema.findById(req.params.id, function (err, subject) {
        if (err) {
            res.send(err)
        } else {
            subject.title = req.body.title;
            subject.teacher = req.body.teacher;

            subject.save(function (err) {
                if (err) {
                    res.send(err);
                } else {
                    res.json(subject);
                }
            });
        }
    });
});

module.exports = router;