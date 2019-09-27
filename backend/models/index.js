const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(
  `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@ths-alumni-portal-g3lyi.mongodb.net/test?retryWrites=true&w=majority`,
  { useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false },
  () => console.log('Connected to mongoDB')
);

module.exports.Job = require('./jobschema');
module.exports.Posts = require('./postSchema');
module.exports.User = require('./User');
module.exports.Token = require('./Token');
module.exports.UserProfile = require('./userProfile');

