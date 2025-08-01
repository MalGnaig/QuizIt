const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  emailAddress: { type: String, required: false },
  highScore: { type: Number },
  totem: { type: String },
});

//Creating an object calles 'Users' based on my user Schema above, and and connects to a MongoDB collection names "users"
const Users = mongoose.model("users", userSchema);

// to allow other js files to use the Schema
module.exports = Users;
