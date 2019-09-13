import * as mongoose from "mongoose";
const mongoose = require('mongoose'), Schema = mongoose.Schema;

const UserSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    email: {
      type: String,
      unique: true,
      match: /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/,
      required: true,
      trim: true
    },
    
    _id : Schema.Types.ObjectId,

    password: {
      type: String,
      required: true,
      trim: true
    },
    role: { type:Schema.Types.ObjectId, ref:'Role' }
  },
  {
    timestamps: true,
    useNestedStrict: true
  }
);

module.exports = mongoose.model("User", UserSchema);
