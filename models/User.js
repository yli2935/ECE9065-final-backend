/*
 * @Author: Li yli2935@uwo.ca
 * @Date: 2022-11-20 13:12:37
 * @LastEditors: Li yli2935@uwo.ca
 * @LastEditTime: 2022-12-09 10:59:47
 * @FilePath: /ECE9065-final-backend/models/User.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const mongoose = require("mongoose");
const Joi = require("joi");
const jwt = require("jsonwebtoken");
const passwordComplexity = require("joi-password-complexity");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,

  },
  role: {
    type: Number,
    required: true,
    default:"user"
  },
  status: {
    type: Number,
    required: true,
  },
});
userSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({ _id: this._id }, process.env.JWT_PRIVATE_KEY, {
    expiresIn: "1d", 
  });
  return token;
};

const User = mongoose.model("User", userSchema);

const validate = (data) => {
  const schema = Joi.object({
    firstName: Joi.string().min(2).max(32).required().label("First Name"),
    lastName: Joi.string().min(2).max(32).required().label("Last Name"),
    email: Joi.string().email().max(32).required().label("Email"),
    password: passwordComplexity().required().label("Password"),
  });
  return schema.validate(data);
};

module.exports = { User, validate };
