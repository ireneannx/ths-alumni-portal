const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: 'cohortdths@gmail.com',
    pass: 'classof2019'
  }
});

module.exports = transporter;