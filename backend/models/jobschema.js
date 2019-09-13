const mongoose = require('mongoose')

const jobschema = new mongoose.Schema({
    user_id: {
        type: String,
        // required: true
    },
    job_type: String,
    job_description: String,
    upvote_count: [{
        type: mongoose.Schema.Types.ObjectId,
        unique: true
    }],
    company_name: String,
    url: String,
    deadline: Date
})

const Job = new mongoose.model("Job", jobschema)

module.exports = Job