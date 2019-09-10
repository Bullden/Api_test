import * as mongoose from "mongoose";
const mongoose = require('mongoose'), Schema = mongoose.Schema;

const UserSchema = mongoose.Schema(
  {
    // name: {
    //   type: String,
    //   required: true,
    //   trim: true
    // },
    // lastName: {
    //   type: String,
    //   required: true
    // },
    // email: {
    //   type: String,
    //   unique: true,
    //   match: /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/,
    //   required: true,
    //   trim: true
    // },
    // password: {
    //   type: String,
    //   required: true,
    //   trim: true
    // }
    nameBook:{type: String},
    description:{type:String},
    cost:{type:String}
  },
);

module.exports = mongoose.model("Book", UserSchema);