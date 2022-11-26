/*
 * @Author: Li yli2935@uwo.ca
 * @Date: 2022-11-20 13:26:59
 * @LastEditors: Li yli2935@uwo.ca
 * @LastEditTime: 2022-11-26 14:53:35
 * @FilePath: /ECE9065-final-backend/controllers/user.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const { User, validate } = require("../models/User");
const bcrypt = require("bcrypt");
const {USER_STATUS,USER_ROLE} = require("../config/config");

exports.createAccount = async (req, res) => {
  try {
    const { error } = validate(req.body);
    if (error)
      return res.status(400).send({ message: error.details[0].message });

    const user = await User.findOne({ email: req.body.email });
    if (user)
      return res
        .status(409)
        .send({ message: "User with given email already Exist!" });

    const salt = await bcrypt.genSalt(Number(process.env.SALT));
    const hashPassword = await bcrypt.hash(req.body.password, salt);
    
    await User({ ...req.body, password: hashPassword,status: USER_STATUS.WAITING_FOR_VERIFY, role: USER_ROLE.REGISTER }).save();
    res.status(201).send({ message: "User created successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Internal Server Error" });
  }
};
