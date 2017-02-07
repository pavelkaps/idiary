/**
 * Created by Паша on 07.02.2017.
 */
var express = require('express');
var router = express.Router();

var TeacherSchema = require('../../models/class');

router.get('/', function (req, res, next) {
    TeacherSchema.find({}).populate('subjects').exec(function (err, teachers) {
        if (err) {
            res.send(err);
        } else {
            res.json(teachers);
        }
    });
});

router.get('/:id', function (req, res, next) {
    TeacherSchema.findOne({_id: req.params.id}).populate('subjects').exec(function (err, teacher) {
        if (err) {
            res.send(err);
        } else {
            res.json(teacher);
        }
    });
});

router.post('/', function (req, res, next) {
    var teacher = TeacherSchema({
        password: req.body.password,
        email: req.body.email,
        name: req.body.name,
        lastName: req.body.lastName,
        phoneNumber: req.body.phoneNumber,
        subjects: req.body.subjects
    });

    teacher.save(function (err) {
        if (err) {
            res.send(err);
        } else {
            res.json(teacher);
        }
    });
});

router.delete('/:id', function (req, res, next) {
    TeacherSchema.findByIdAndRemove(req.params.id, function (err) {
        if (err) {
            res.send(err);
        } else {
            res.json({status: "success"});
        }
    });
});

router.put('/:id', function (req, res, next) {
    TeacherSchema.findById(req.params.id, function (err, teacher) {
        if (err) {
            res.send(err)
        } else {
            teacher.password = req.body.password;
            teacher.email = req.body.email;
            teacher.name = req.body.name;
            teacher.lastName = req.body.lastName;
            teacher.phoneNumber = req.body.phoneNumber;
            teacher.subjects = req.body.subjects;

            teacher.save(function (err) {
                if (err) {
                    res.send(err);
                } else {
                    res.json(teacher);
                }
            });
        }
    });
});

module.exports = router;