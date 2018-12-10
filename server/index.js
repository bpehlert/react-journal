// Express server
const express = require("express");
const mongoose = require("mongoose");
const keys = require("./config/keys");
require("./models/Entry");

// Connect to MongoDB at mLab.com
mongoose.connect(keys.mongoURI);

// Creates a new application that is a running express app.
// This is used to set up CONFIGURATION and route handlers.
const app = express();

// Route handler, specifies method (get, post, put, delete, patch)
app.get("/", (req, res) => {
  res.send({ Hello: "World" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);
