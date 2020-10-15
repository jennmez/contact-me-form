const express = require('express');
const bodyParser = require('body-parser');
//cross origin resource sharing, one
const cors = require('cors');
const dotenv = require('dotenv');
const nodemailer = require('nodemailer');
// const sendGrid = require('@sendgrid/mail');

const app = express();
dotenv.config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

// app.use((req, res, next) => {
//   res.setHeader('Access-Control-Allow-Origin', '*');
//   res.setHeader(
//     'Access-Control-Allow-Headers',
//     'Origin, X-Requested-With, Content-Type, Accept'
//   );
//   res.setHeader(
//     'Access-Control-Allow-Methods',
//     'GET, POST, PATCH, DELETE, OPTIONS'
//   );
//   next();
// });

app.get('/', (req, res, next) => {
  res.send('API Status: Running');
});

// POST route from contact form
app.post('/contact', (req, res) => {
  // Instantiate the SMTP server
  const smtpTrans = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  // Specify what the email will look like
  const mailOpts = {
    from: req.body.email, // This is ignored by Gmail
    to: process.env.GMAIL_USER,
    subject: `New message from your React Contact Form Page`,
    text: `${req.body.visitorName} at (${req.body.email}) says: ${req.body.message}`,
  };

  // Attempt to send the email
  smtpTrans.sendMail(mailOpts, (error, response) => {
    if (error) {
      res.json('contact-failure'); // Show a page indicating failure
    } else {
      res.json('contact-success'); // Show a page indicating success
    }
  });
});

// const sgMail = require('@sendgrid/mail');

// app.post('/email', (req, res, next) => {
//   const user = req.body;
//   console.log('u:::::', user);
//   sgMail.setApiKey(process.env.REACT_APP_SG_API_KEY);
//   const msg = {
//     to: 'jennmez@gmail.com',
//     from: user.email,
//     subject: `${user.name} sent you a msg from ReactApp`,
//     text: user.message,
//     html: '<strong>and easy to do anywhere, even with Node.js</strong>',
//   };
//   sgMail
//     .send(msg)
//     .then(() => {
//       console.log('Email sent');
//     })
//     .catch((error) => {
//       console.error(error);

//       if (error.response) {
//         // Extract error msg
//         const { message, code, response } = error;

//         // Extract response msg
//         const { headers, body } = response;

//         console.error(body);
//       }
//     });
// });

const PORT = process.env.PORT || 3030;

app.listen(PORT, () => {
  console.log(`server started on PORT: ${PORT}`);
});
