const mongoose = require('mongoose')

const jobschema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UserProfile'
        // required: true
    },
    job_type: String,
    job_description: String,
    upvote_count: [{
        type: String
        // unique: true
    }],
    company_name: String,
    url: String,
    deadline: Date
})

const Job = new mongoose.model("Job", jobschema)

module.exports = Job