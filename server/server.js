const express = require("express");
const path = require("path");
const PORT = 3000;
const bodyParser = require('body-parser')
const app = express();
const jobAppsRouter = require('./routes/api.js');


app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use('/jobApps', jobAppsRouter)

// Respond with index.html file when user opens the page
app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../index.html"));
});

// app.get('/signin', (req, res) => {})
// app.get('/register', (req, res) => {})

// statically serve everything in the build folder on the route '/build'
app.use("/dist", express.static(path.join(__dirname, "../dist")));

//catch all for react router
app.get("/*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../index.html"));
});

// Global error handler
app.use((err, req, res, next) => {
  console.log(`Global error handler received this error: ${err}`);
  res.status(500).send("Internal server error.");
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
