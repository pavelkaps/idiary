/**
 * Created by Паша on 07.02.2017.
 */
var express = require('express');
var router = express.Router();

var ChildSchema = require('../../models/child');
var DiarySchema = require('../../models/diary');

router.get('/', function (req, res, next) {
    ChildSchema.find({}).populate('diary parents').exec(function (err, childrens) {
        if (err) {
            res.send(err);
        } else {
            res.json(childrens);
        }
    });
});

router.get('/:id', function (req, res, next) {
    ChildSchema.findOne({_id: req.params.id}).populate('diary parents').exec(function (err, child) {
        if (err) {
            res.send(err);
        } else {
            res.json(child);
        }
    });
});

router.post('/', function (req, res, next){
    var child = ChildSchema({
        password: req.body.password,
        email: req.body.email,
        name: req.body.name,
        lastName: req.body.lastName,
        phoneNumber: req.body.phoneNumber,
        parents: req.body.parents
    });

    var diary = DiarySchema({
        children: child._id
    });

    diary.save(function (err) {
        if (err) {
            res.send(err);
        } else {
            child.diary = diary._id;
            child.save(function (err) {
                if (err) {
                    res.send(err);
                } else {
                    console.log(child);
                    res.json(child);
                }
            });
        }
    });

});

router.delete('/:id', function (req, res, next) {
    ChildSchema.findByIdAndRemove(req.params.id, function (err) {
        if (err) {
            res.send(err);
        } else {
            res.json({status: "success"});
        }
    });
});

router.put('/:id', function (req, res, next) {
    ChildSchema.findById(req.params.id, function (err, child) {
        if (err) {
            res.send(err)
        } else {
            child.password = req.body.password;
            child.email = req.body.email;
            child.name = req.body.name;
            child.lastName = req.body.lastName;
            child.phoneNumber = req.body.phoneNumber;
            child.parents = req.body.parents;

            child.save(function (err) {
                if (err) {
                    res.send(err);
                } else {
                    res.json(child);
                }

            });
        }
    });
});

module.exports = router;