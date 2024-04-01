const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  profession: {
    type: String,
    rquired: true,
  },
});

const UserModel = mongoose.model("users", userSchema);

module.exports = UserModel;
