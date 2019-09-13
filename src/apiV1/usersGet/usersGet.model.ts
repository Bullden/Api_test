import * as mongoose from "mongoose";
const mongoose = require('mongoose'), Schema = mongoose.Schema;

const UserSchema = mongoose.Schema(
  {
    name:{type: String},
    email:{type:String}
  },
);

module.exports = mongoose.model("UsersGet", UserSchema);