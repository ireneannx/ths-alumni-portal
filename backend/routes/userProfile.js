
var express = require('express');
var router = express.Router();
const db = require('../models')

//path: /api/users
router.get('/', function(req,res){
    db.UserProfile.find()
       .then((data)=>{
           res.send(data)
       })
       .catch((err) => {
        res.send(err)
    })
})
//get a particular user
router.get('/:userid', function (req, res) {
    db.UserProfile.findById(req.params.id)
        .then((data) => {
            res.send(data)
        })
        .catch((err) => {
            res.send(err)
        })
})


//add userprofile
router.post('/', function (req, res, next) {
    const { bio, current_company, employment_status, github, twitter, linkedIn } = req.body;
    db.UserProfile.create({
        bio,
        current_company,
        employment_status,
        github,
        twitter,
        linkedIn,
        avatarURL
      
    })
        .then(() => {
            res.send(req.body)
        })
        .catch((err)=>{
            res.send(err)
        })
})

// update 

router.put('/:userid', function (req, res) {
    const { bio, current_company, employment_status, github, twitter, linkedIn } = req.body;
    db.UserProfile.findOneAndUpdate({ _id: req.params.id }, {
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
