
var express = require('express');
var router = express.Router();
const db = require('../models')

const authMidWare = require('../middleware/auth')

//path: /users
router.get('/', authMidWare, function (req, res) {
    db.UserProfile.find()
        .then((data) => {
            res.send(data)
        })
        .catch((err) => {
            res.send(err)
        })
})
//get a particular user
router.get('/:userid', authMidWare, function (req, res) {
    db.UserProfile.findOne({ _id: req.params.userid })
        .populate('posts')
        .populate('jobs')
        .then((data) => {
            console.log("in backend", data)
            res.send(data)
        })
        .catch((err) => {
            res.send(err)
        })
})


//add userprofile
router.post('/', authMidWare, function (req, res, next) {
    const { bio, current_company, employment_status, github, twitter, linkedIn } = req.body;
    db.UserProfile.create({
        bio,
        current_company,
        employment_status,
        github,
        twitter,
        linkedIn,
        avatarURL: req.body.avatarURL || "http://svgur.com/i/65U.svg",

    })
        .then(() => {
            res.send(req.body)
        })
        .catch((err) => {
            res.send(err)
        })
})

// update 

router.put('/:userid', authMidWare, function (req, res) {
    const { bio, current_company, employment_status, github, twitter, linkedIn } = req.body;
    db.UserProfile.findOneAndUpdate({ _id: req.params.userid }, {
        bio,
        current_company,
        employment_status,
        avatarURL: req.body.avatarURL || "http://svgur.com/i/65U.svg",
        github,
        twitter,
        linkedIn
    })
        .then(() => {
            res.end()
            console.log("Update was successful", req.body)
        })

})



module.exports = router;
