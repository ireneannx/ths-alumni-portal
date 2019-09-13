const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/groupproject', { useNewUrlParser: true })

module.exports.Job = require('./jobschema');
module.exports.Posts = require('./postSchema');