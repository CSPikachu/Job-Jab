const express = require("express");
const path = require("path");
const PORT = 3000;

const app = express();

app.use(express.json());

// Respond with index.html file when user opens the page
app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../index.html"));
});

// statically serve everything in the build folder on the route '/build'
app.use("/dist", express.static(path.join(__dirname, "../dist")));

// Global error handler
app.use((err, req, res, next) => {
  console.log(`Global error handler received this error: ${err}`);
  res.status(500).send("Internal server error.");
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
