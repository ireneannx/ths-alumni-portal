const { Schema, model } = require('mongoose');
const mongoose = require('mongoose');
const userProfileSchema = new Schema({
    _id: {
        type: String,
        required: true,
        // ref: 'User'
    },
    name:{
        type: String,
        required: true,
    },
    bio: {
        type: String
    },
    current_company: {
        type: String
    },
    employment_status: {
        type: Boolean
    },
    avatarURL: {
        type: String
    },
    posts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Posts'
        }
    ],
    jobs: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Jobs'
        }
    ],
    github: {
        type: String
    },
    twitter: {
        type: String
    },
    linkedIn: {
        type: String
    }
}, {
    timestamps: true
});
const UserProfile = mongoose.model('UserProfile', userProfileSchema)
module.exports = UserProfile;
