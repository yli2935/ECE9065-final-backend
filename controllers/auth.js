/*
 * @Author: Li yli2935@uwo.ca
 * @Date: 2022-11-20 15:06:36
 * @LastEditors: Li yli2935@uwo.ca
 * @LastEditTime: 2022-12-08 11:44:59
 * @FilePath: /ECE9065-final-backend/controllers/auth.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const { User } = require("../models/User");
const bcrypt = require("bcrypt");
const Joi = require("joi");
const {USER_STATUS,USER_ROLE} = require("../config/config");

exports.login = async (req, res) => {
  try {
    const { error } = validate(req.body);
    if (error)
      return res.status(400).send({ message: error.details[0].message });

    const user = await User.findOne({ email: req.body.email });
    if (!user)
      return res.status(401).send({ message: "Invalid Email or Password" });

    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );


    if (!validPassword)
      return res.status(401).send({ message: "Invalid Email or Password" });


    const token = user.generateAuthToken();
    console.log(token)
    if(user.status === USER_STATUS.WAITING_FOR_VERIFY){
      console.log(USER_STATUS.WAITING_FOR_VERIFY,user.status)
      return res
      .status(200)
      .send({ message: "please verify your account" });
    }else{
      return res
      .status(200)
      .send({ data: token,userName: user.firstName,email: user.email,message: "Logged in successfully" });
    }

      
  } catch (error) {
    return res.status(500).send({ message: "Internal Server Error " });
  }
};

const validate = (data) => {
  const schema = Joi.object({
    email: Joi.string().email().required().label("Email"),
    password: Joi.string().required().label("Password"),
  });
  return schema.validate(data);
};
