/**
 * Created by Паша on 07.02.2017.
 */
var express = require('express');
var router = express.Router();

var ParentSchema = require('../../models/parent');

router.get('/', function (req, res, next) {
    ParentSchema.find({}).populate('childrens').exec(function (err, parents) {
        if (err) {
            res.send(err);
        } else {
            res.json(parents);
        }
    });
});

router.get('/:id', function (req, res, next) {
    ParentSchema.findOne({_id: req.params.id}).populate('childrens').exec(function (err, parent) {
        if (err) {
            res.send(err);
        } else {
            res.json(parent);
        }
    });
});

router.post('/', function (req, res, next) {
    var parent = ParentSchema({
        password: req.body.password,
        email: req.body.email,
        name: req.body.name,
        lastName: req.body.lastName,
        phoneNumber: req.body.phoneNumber,
        childrens: req.body.childrens
    });

    parent.save(function (err) {
        if (err) {
            res.send(err);
        } else {
            res.json(parent);
        }
    });


});

router.delete('/:id', function (req, res, next) {
    ParentSchema.findByIdAndRemove(req.params.id, function (err) {
        if (err) {
            res.send(err);
        } else {
            res.json({status: "success"});
        }
    });
});

router.put('/:id', function (req, res, next) {
    ParentSchema.findById(req.params.id, function (err, parent) {
        if (err) {
            res.send(err)
        } else {
            parent.password = req.body.password;
            parent.email = req.body.email;
            parent.name = req.body.name;
            parent.lastName = req.body.lastName;
            parent.phoneNumber = req.body.phoneNumber;
            parent.childrens = req.body.childrens;

            parent.save(function (err) {
                if (err) {
                    res.send(err);
                } else {
                    res.json(parent);
                }

            });
        }
    });
});

module.exports = router;