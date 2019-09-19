var express = require('express');
var router = express.Router();
const db = require('../models')

const authMidWare = require('../middleware/auth')

//path: /posts 
/* GET users listing. */
router.get('/', authMidWare, function (req, res) {
  db.Posts.find()
    .then((data) => res.send(data))
    .catch((err) => res.send(err))
});

router.post('/', authMidWare, (req, res) => {
  db.Posts.create(req.body)
    .then((data) => {
      console.log(data)
      db.UserProfile.findOneAndUpdate({ _id: data.author }, { $push: { posts: data_id } }).exec()
      // .then((user)=> console.log(user))
      res.json({ status: 'successfully created post' })
    })
    .catch((err) => res.send(err))
})


module.exports = router;
