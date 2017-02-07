/**
 * Created by Паша on 07.02.2017.
 */
var express = require('express');
var router = express.Router();

var ClassSchema = require('../models/class');

router.get('/', function (req, res, next) {
    ClassSchema.find({}).populate('childrens').exec(function (err, classes) {
        if (err) {
            res.send(err);
        } else {
            res.json(classes);
        }
    });
});

router.get('/:id', function (req, res, next) {
    ClassSchema.findOne({_id: req.params.id}).populate('childrens').exec(function (err, _class) {
        if (err) {
            res.send(err);
        } else {
            res.json(_class);
        }
    });
});

router.post('/', function (req, res, next) {
    var _class = ClassSchema({
        title: req.body.title,
        childrens: req.body.childrens
    });

    _class.save(function (err) {
        if (err) {
            res.send(err);
        } else {
            res.json(_class);
        }
    });
});

router.delete('/:id', function (req, res, next) {
    ClassSchema.findByIdAndRemove(req.params.id, function (err) {
        if (err) {
            res.send(err);
        } else {
            res.json({status: "success"});
        }
    });
});

router.put('/:id', function (req, res, next) {
    ClassSchema.findById(req.params.id, function (err, _class) {
        if (err) {
            res.send(err)
        } else {
            _class.title = req.body.title;
            _class.childrens = req.body.childrens;

            _class.save(function (err) {
                if (err) {
                    res.send(err);
                } else {
                    res.json(_class);
                }
            });
        }
    });
});

module.exports = router;