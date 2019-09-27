const mongoose = require('mongoose');

mongoose.connect(
  'mongodb+srv://rizwan-user:rizwan-user@ths-alumni-portal-g3lyi.mongodb.net/test?retryWrites=true&w=majority',
  { useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false },
  () => console.log('Connected to mongoDB')  
);

module.exports.Job = require('./jobschema');
module.exports.Posts = require('./postSchema');
module.exports.User = require('./User');
module.exports.Token = require('./Token');
module.exports.UserProfile = require('./userProfile');
