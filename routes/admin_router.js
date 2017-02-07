/**
 * Created by Паша on 07.02.2017.
 */
var express = require('express');
var router = express.Router();

var AdminSchema = require('../models/admin');


router.get('/', function (req, res, next) {
    AdminSchema.find({}, function (err, admins) {
        if (err) {
            res.send(err);
        } else {
            res.json(admins);
        }
    });
});

router.get('/:id', function (req, res, next) {

    AdminSchema.findById(req.params.id, function (err, admin) {
        if (err) {
            res.send(err);
        } else {
            res.json(admin);
        }
    });
});

router.post('/', function (req, res, next) {
    var admin = AdminSchema({
        password: req.body.password,
        email: req.body.email,
        name: req.body.name,
        lastName: req.body.lastName
    });

    admin.save(function (err) {
        if (err) {
            res.send(err);
        } else {
            res.json(admin);
        }
    });
});

router.delete('/:id', function (req, res, next) {
    AdminSchema.findByIdAndRemove(req.params.id, function (err) {
        if (err) {
            res.send(err);
        } else {
            res.json({status: "success"});
        }
    });
});

router.put('/:id', function (req, res, next) {

    AdminSchema.findById(req.params.id, function (err, admin) {
        if (err) {
            res.send(err)
        } else {
            admin.password = req.body.password;
            admin.email = req.body.email;
            admin.name = req.body.name;
            admin.lastName = req.body.lastName;

            admin.save(function (err) {
                if (err) {
                    res.send(err);
                } else {
                    res.json(admin);
                }

            });
        }
    });
});

module.exports = router;