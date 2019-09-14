const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://rizwan-user:rizwan-user@ths-alumni-portal-g3lyi.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true })

module.exports.Job = require('./jobschema');
module.exports.Posts = require('./postSchema');
module.exports.UserProfile = require('./userProfile');