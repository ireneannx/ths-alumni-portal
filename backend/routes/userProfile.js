
var express = require('express');
var router = express.Router();
const db = require('../models')

const authMidWare = require('../middleware/auth')

//path: /users
router.get('/', authMidWare, function (req, res) {
    db.UserProfile.find()
        .populate('posts')
        .then((data) => {
            res.send(data)
        })
        .catch((err) => {
            res.send(err)
        })
})
//get a particular user
router.get('/:userid', authMidWare, function (req, res) {
    db.UserProfile.findById(req.params.userid)
        .populate('posts')
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
        avatarURL: req.body.avatarURL || "https://cdn.elawoman.com/profilepic/female_dummy.jpg",

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
        avatarURL: req.body.avatarURL || "https://cdn.elawoman.com/profilepic/female_dummy.jpg",
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
