// Creates a Mongoose model Class for entries
const mongoose = require("mongoose");
const { Schema } = mongoose; //const Schema = mongoose.Schema;

const entrySchema = new Schema({
  entryId: String,
  date: String,
  text: String
});

// To create an actual model class, we need to call the following:

mongoose.model("entries", entrySchema); //(name of collection, and Schema)
