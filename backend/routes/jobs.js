var express = require('express');
var router = express.Router();
const db = require('../models/index')

const authMidWare = require('../middleware/auth')


//path: /jobs
router.get('/', authMidWare, function (req, res, next) {
    console.log("A get request has been made to jobs")
    db.Job.find()
        .then((data) => {
            res.send(data)
        })
        .catch((err) => {
            res.send(err)
        })
});

//changing above code
router.post('/', authMidWare, (req, res) => {
    console.log("***********", req.body)

    db.Job.create(req.body)
        .then((data) => {
            db.UserProfile.findOneAndUpdate({ _id: data.user_id }, { $push: { jobs: data } }).exec() //.exec() stops this from returning a promise and just execute it 
            res.json({ Job: "SUCCESSFULLY CREATED" });
        })
        .catch((err) => res.send(err));
})


router.put('/:jobid', authMidWare, function (req, res) {
    db.Job.findOneAndUpdate({ _id: req.params.jobid }, {
        job_type: req.body.job_type,
        job_description: req.body.job_description,
        // upvote_count: 0,
        company_name: req.body.company_name,
        url: req.body.url
    })
        .then(() => {
            res.end()
            console.log("Update was successful", req.body)
        })

})

//upvote button
router.post('/like/:userid/:jobid', authMidWare, async function (req, res, next) {
    let like = await db.Job.findOneAndUpdate({ _id: req.params.jobid },
        { $push: { upvote_count: req.params.userid } }
    )
        .then((res) => {
            console.log(res)
            res.send(res)
        })
        .catch((err) => {
            res.send(err)
        })
})

router.delete('/:jobid', authMidWare, function (req, res, next) {
    db.Job.findByIdAndRemove(req.params.jobid)
        .then((data) => {
            res.send(data)
        })
        .catch((err) => {
            res.send(err)
        })
})


module.exports = router;
