const mongoose = require('mongoose');

mongoose.connect(
  'mongodb://localhost/alumni-test',
  { useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false }
);

module.exports.Job = require('./jobschema');
module.exports.Posts = require('./postSchema');
module.exports.User = require('./User');
module.exports.Token = require('./Token');
