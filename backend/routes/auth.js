const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const auth = require('../middleware/auth');
const jwt = require('jsonwebtoken');
const config = require('../config/default');
const { check, validationResult } = require('express-validator');

const db = require('../models/index');

// @route    GET /auth
// @desc     Test route
// @access   Public

router.get('/', auth, async (req, res) => {
  try {
    const user = await db.User.findById(req.user._id).select('-password');
    res.json(user);
  } catch (err) {
    // console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route    POST api/auth
// @desc     Authenticate user & get token
// @access   Public

router.post(
  '/',
  [
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Password is required').exists()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
      let user = await db.User.findOne({ email });

      if (!user) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'Invalid Credentials' }] });
      }

      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'Invalid Credentials' }] });
      }

      const payload = {
        user: {
          _id: user._id,
          name: user.name,
          email: user.email
        }
      };

      // const newUser = {
      //   _id: user._id,
      //   name: user.name,
      //   email: user.email
      // }

      jwt.sign(
        payload,
        config.jwtSecret,
        { expiresIn: 360000 },
        (err, token) => {
          if (err) {
            throw err;
          } else {
            return res.status(200).json({
              success: true,
              token: token,
              user: {}
            });
          }
        }
      );
    } catch (err) {
      // console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);

module.exports = router;
