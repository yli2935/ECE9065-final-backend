/*
 * @Author: Li yli2935@uwo.ca
 * @Date: 2022-12-05 13:15:00
 * @LastEditors: Li yli2935@uwo.ca
 * @LastEditTime: 2022-12-05 13:20:00
 * @FilePath: /ECE9065-final-backend/models/policy.js
*/
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const policySchema = new Schema({
  type: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
    default: ""
  },
  time: {
    type: String,
  },

});
const Policy = mongoose.model("Policy", policySchema);
module.exports = { Policy };



