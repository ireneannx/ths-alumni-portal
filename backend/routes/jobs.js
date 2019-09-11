var express = require('express');
var router = express.Router();
const db = require('../models/index')

router.get('/', function (req, res, next) {
    db.Job.find()
        .then((data) => {
            res.send(data)
        })
        .catch((err) => {
            res.send(err)
        })
});

router.get('/:jobid', function (req, res, next) {
    db.Job.findById(req.params.jobid)
        .then((data) => {
            res.send(data)
        })
        .catch((err) => {
            res.send(err)
        })
})

router.post('/:userid', function (req, res, next) {
    db.Job.create({
        user_id: req.params.userid,
        job_type: req.body.job_type,
        job_description: req.body.job_description,
        upvote_count: 0,
        company_name: req.body.company_name,
        url: req.body.url
    })
    res.send(req.body)
})

router.put('/:jobid', function (req, res, next) {
    db.Job.findOneAndUpdate({ _id: req.params.jobid }, {
        job_type: req.body.job_type,
        job_description: req.body.job_description,
        upvote_count: 0,
        company_name: req.body.company_name,
        url: req.body.url
    })
    res.send("Update was successful", req.body)
})

router.delete('/:jobid', function (req, res, next) {
    db.Job.findByIdAndRemove(req.params.jobid)
        .then((data) => {
            res.send(data)
        })
        .catch((err) => {
            res.send(err)
        })
})


module.exports = router;
