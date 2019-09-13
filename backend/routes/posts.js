var express = require('express');
var router = express.Router();
const db = require('../models')

/* GET users listing. */
router.get('/', function (req, res) {
  db.Posts.find()
    .then((data) => res.send(data))
    .catch((err) => res.send(err))
});

//to be deleted after userschema is enabled
router.post('/', (req, res) => {
  console.log('from the back', req.body)
  db.Posts.create(req.body)
    .then(res.json({ status: 'successfully created post' }))
})

//to be enabled after userschema is enabled

// router.post('/', (req, res) => {
//   db.Posts.create(req.body)
//   .then((post) => {
//     db.Posts.findOneAndUpdate({_id: data.id},
//       {$push: {posts: data._id}})
//       res.json({status: 'successfully created post'})
//   })
// })


module.exports = router;
