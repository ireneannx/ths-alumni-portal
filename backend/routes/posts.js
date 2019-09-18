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

//to be deleted after userschema is enabled
// router.post('/', authMidWare, (req, res) => {
//   console.log('from the back', req.body)
//   db.Posts.create(req.body)
//     .then(res.json({ status: 'successfully created post' }))
// })

// to be enabled after userschema is enabled

router.post('/', authMidWare, (req, res) => {
  db.Posts.create(req.body)
    .then((data) => {
      console.log(data)
      db.UserProfile.findOneAndUpdate({ _id: data.author }, { $push: { posts: data._id } }).exec()
      // .then((user)=> console.log(user))
      res.json({ status: 'successfully created post' })
    })
})


module.exports = router;
