/*
 * @Author: Li yli2935@uwo.ca
 * @Date: 2022-11-27 15:50:38
 * @LastEditors: Li yli2935@uwo.ca
 * @LastEditTime: 2022-11-29 12:38:32
 * @FilePath: /ECE9065-final-backend/models/list.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const listSchema = new Schema({
  list_name: {
    type: String,
    required: true,
    unique: true,
  },
  tracks_list: {
    type: Array,
    required: true,
  },
  last_modify_date: {
    type: Date,
    required: true,
    default: "2022-11-27",
  },
  creator: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  visibility: {
    type: Boolean,
    default:false
  },
  review: {
    type: Array,
  },
});

module.exports = mongoose.model("List", listSchema);
