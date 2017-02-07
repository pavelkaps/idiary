/**
 * Created by Паша on 07.02.2017.
 */
var express = require('express');
var router = express.Router();

var DiarySchema = require('../models/class');

router.get('/', function (req, res, next) {
    DiarySchema.find({}).populate('children').exec(function (err, diary) {
        if (err) {
            res.send(err);
        } else {
            res.json(diary);
        }
    });
});

router.get('/:id', function (req, res, next) {
    DiarySchema.findOne({_id: req.params.id}).populate('children').exec(function (err, diary) {
        if (err) {
            res.send(err);
        } else {
            res.json(diary);
        }
    });
});

router.post('/', function (req, res, next) {
    var diary = DiarySchema({
        children: req.body.children
    });

    diary.save(function (err) {
        if (err) {
            res.send(err);
        } else {
            res.json(diary);
        }
    });
});

router.delete('/:id', function (req, res, next) {
    DiarySchema.findByIdAndRemove(req.params.id, function (err) {
        if (err) {
            res.send(err);
        } else {
            res.json({status: "success"});
        }
    });
});

router.put('/:id', function (req, res, next) {
    DiarySchema.findById(req.params.id, function (err, diary) {
        if (err) {
            res.send(err)
        } else {
            diary.notes = req.body.notes;
            diary.children = req.body.children;

            diary.save(function (err) {
                if (err) {
                    res.send(err);
                } else {
                    res.json(diary);
                }
            });
        }
    });
});

module.exports = router;