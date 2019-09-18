var express = require('express');
var router = express.Router();
// Server side validation
const { check, validationResult } = require('express-validator');
const transporter = require('../middleware/nodemailer');
const jwt = require('jsonwebtoken');
const config = require('../config/default');
const bcrypt = require('bcryptjs');

const db = require('../models/index');

// @route /user/test
// @desc Testing route

router.get('/test', (req, res) => {
  res.send('User route working');
});

// @route /user/register
// @desc Registering user

router.post(
  '/register',
  [
    check('name', 'Name is required')
      .not()
      .isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check(
      'password',
      'Please enter a password with 6 or more characters'
    ).isLength({ min: 6 })
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password } = req.body;

    try {
      let user = await db.User.findOne({ email });

      if (user) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'User already exists' }] });
      }

      user = new db.User({
        name,
        email,
        password
      });

      const salt = await bcrypt.genSalt(10);

      user.password = await bcrypt.hash(password, salt);

      // await console.log(user);

      await user.save(function (err, data) {
        if (!err) {
          db.UserProfile.create({ _id: data._id })
        }
      })

      res.status(200).send('User registration successful');
    } catch (err) {
      console.error(err.message);
      res.status(500).json({ errors: [{ msg: 'Server error' }] });
    }
  }
);

// @route /user/resetpassword
// @desc get a link to reset your password
router.post('/resetpassword', (req, res) => {
  db.User.findOne({ email: req.body.email }).then(user => {
    if (!user) {
      return res.status(400).json({
        errors: [{ msg: `No user with email ${req.body.email} exists` }]
      });
    }

    const payload = {
      user: {
        id: user.id
      }
    };

    jwt.sign(
      payload,
      config.get('jwtSecret'),
      { expiresIn: 360000 },
      async (err, token) => {
        if (err) throw err;

        const tokenDocument = new db.Token({
          _userId: user._id,
          token: token
        });

        // Save the token
        await tokenDocument.save(function (err) {
          if (err) {
            return res.status(500).json({ errors: [{ msg: err.message }] });
          }

          // Send the email
          transporter
            .sendMail({
              from: '"THS Inc" <cohortdths@gmail.com>', // sender address
              to: `${req.body.email}`, // list of receivers
              subject: 'Reset Password Link',
              html:
                'Hello,\n\n' +
                'It seems you have made a request to change a password. You can change the password by clicking the link: \nhttp://' +
                req.headers.host +
                '/user/changepassword/' +
                tokenDocument.token +
                '.\n'
            })
            .then(info => {
              console.log('Message sent: %s', info.messageId);
              res.status(200).send({
                msg:
                  'A link to change a password is sent to ' + user.email + '.'
              });
            })
            .catch(err => {
              console.log('Something went wrong.', err);
              return res
                .status(500)
                .json({ errors: [{ msg: 'Error in email send' }] });
            });
        });
      }
    );
  });
});

// @route /user/changepassword
// @desc Change Password
router.post(
  '/changepassword/:tokenId',
  [
    check(
      'password',
      'Please enter a password with 6 or more characters'
    ).isLength({ min: 6 })
  ],
  (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    // Check Token is valid or not
    db.Token.findOne({ token: req.params.tokenId }).then(token => {
      if (!token)
        return res.status(400).json({
          errors: [
            {
              type: 'not-verified',
              msg:
                'We were unable to find a valid token. Your token may had expired. Please use the forget password option.'
            }
          ]
        });

      // Find a user from token
      db.User.findOne({ _id: token._userId })
        .then(user => {
          if (!user)
            return res.status(400).json({
              errors: [{ msg: 'Invalid Token' }]
            });
          user.password = req.body.password;
          bcrypt.genSalt(10, function (err, salt) {
            bcrypt.hash(user.password, salt, function (err, hash) {
              if (err) throw err;
              else {
                user.password = hash;
                user.save((err, user) => {
                  if (err) {
                    return res.status(500).json({
                      errors: [{ msg: 'Error in saving the password' }]
                    });
                  }
                  res
                    .status(200)
                    .send('The password has been changed. Please log in.');
                });
              }
            });
          });
        })
        .catch(err => {
          console.error(err.message);
          res.status(500).json({ errors: [{ msg: 'Server error' }] });
        });
    });
  }
);

module.exports = router;