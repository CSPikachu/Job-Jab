const express = require('express');
const path = require('path');
const PORT = 3000;
const bodyParser = require('body-parser');
const app = express();
const jobAppsRouter = require('./routes/api.js');
const userRouter = require('./routes/auth.js');
const cookieParser = require('cookie-parser');
const authController = require('./controllers/authController');
const db = require('../server/queries/queries');

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/auth', userRouter);
app.post('/register', db.createUser);
app.use('/jobapps', jobAppsRouter);

// Respond with index.html file when user opens the page
app.get('/', (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, '../index.html'));
});

// app.post(
//   "/login",
//   authController.verifyUser,
//   authController.setCookie,
//   authController.startSession,
//   (req, res) => {
//     res.send({ test: true });
//     console.log("im in the login route");
//   }
// );

// app.post(
//   "/register",
//   authController.createUser,
//   authController.setCookie,
//   authController.startSession,
//   (req, res) => {}
// );

// statically serve everything in the build folder on the route '/build'
app.use('/dist', express.static(path.join(__dirname, '../dist')));

//catch all for react router
app.get('/*', (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, '../index.html'));
});

// Global error handler
app.use((err, req, res, next) => {
  console.log(`Global error handler received this error: ${err}`);
  res.status(500).send('Internal server error.');
});

// app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

module.exports = app.listen(PORT, () =>
  console.log(`Listening on port ${PORT}`)
);
