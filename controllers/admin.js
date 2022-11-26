/*
 * @Author: Li yli2935@uwo.ca
 * @Date: 2022-11-26 14:14:43
 * @LastEditors: Li yli2935@uwo.ca
 * @LastEditTime: 2022-11-26 15:09:23
 * @FilePath: /ECE9065-final-backend/controllers/admin.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
 
const {USER_STATUS,USER_ROLE} = require("../config/config");
const { User } = require("../models/User");

exports.disableUser = async (req, res, next) => {
  const { email } = req.params;
  console.log("disableUseremail", email);
  const user = await User.updateOne({ email: email },{ status: USER_STATUS.NOT_ALLOW });
  res.send({ code: 0, user });
};

exports.enableUser = async (req, res, next) => {
  const { email } = req.params;
  console.log("enableUser", email);
  const data = await User.updateOne({ email: email },{ status: USER_STATUS.ALREADY_SIGN_UP });
  res.send({ code: 0, data });
};

exports.setUserAsAdmin = async (req, res, next) => {
  const { email } = req.params;
  const data = await User.updateOne({ email: email },{ role: USER_ROLE.ADMIN });
  res.send({ code: 0, data });
};

exports.cancelUserAsAdmin = async (req, res, next) => {
  const { email } = req.params;
  const data = await User.updateOne({ email: email },{ role: USER_ROLE.REGISTER });
  res.send({ code: 0, data });
};

exports.getUserList = async (req, res, next) => {
    const users = await User.find();
    return users;
}