const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');

const dotenv = require('dotenv');
const nodemailer = require('nodemailer');
//cross origin resource sharing, one
const cors = require('cors');

dotenv.config();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());
// app.options('*', cors());

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
//   res.setHeader('Access-Control-Allow-Credentials', true);

//   next();
// });

app.get('/', (req, res, next) => {
  res.sendFile(__dirname + '/index.html');
});

// POST route from contact form
app.post('/api/contact', (req, res) => {
  console.log('entered route');
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
    text: `${req.body.visitorName} at (${req.body.email}) says: ${req.body.trimmedMsg}`,
  };

  // Attempt to send the email
  smtpTrans.sendMail(mailOpts, (error, response) => {
    if (error) {
      res.json('failure'); // Show a page indicating failure
    } else {
      res.json('success'); // Show a page indicating success
    }
  });
});

const PORT = process.env.PORT || 3030;

app.listen(PORT, () => {
  console.log(`server started on PORT: ${PORT}`);
});
