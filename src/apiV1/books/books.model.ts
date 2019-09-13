import * as mongoose from "mongoose";
const mongoose = require('mongoose'), Schema = mongoose.Schema;

const UserSchema = mongoose.Schema(
  {
    nameBook:{type: String},
    description:{type:String},
    cost:{type:String}
  },
);

module.exports = mongoose.model("Book", UserSchema);