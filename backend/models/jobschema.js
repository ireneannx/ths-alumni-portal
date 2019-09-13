const mongoose = require('mongoose')

const jobschema = new mongoose.Schema({
    user_id :[{
        type : String,
        required : true
    }],
    job_type : String,
    job_description : String,
    upvote_count : Number,
    company_name : String,
    url : String,
})

const Job = new mongoose.model("Job", jobschema)

module.exports = Job