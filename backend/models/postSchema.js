const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "UserProfile"
  },
  content: {
    type: String,
    required: true
  },
  name: {
    type: String
  },
  avatarURL: {
    type: String
  }  
},{
  timestamps:true
});

const Posts = mongoose.model("Posts", postSchema);
module.exports = Posts;
