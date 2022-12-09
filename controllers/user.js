/*
 * @Author: Li yli2935@uwo.ca
 * @Date: 2022-11-20 13:26:59
 * @LastEditors: Li yli2935@uwo.ca
 * @LastEditTime: 2022-12-09 17:43:34
 * @FilePath: /ECE9065-final-backend/controllers/user.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const { User, validate } = require("../models/User");
const bcrypt = require("bcrypt");
const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity");
const {
  USER_STATUS,
  USER_ROLE,
  TransportOptions,
} = require("../config/config");
const nodemailer = require("nodemailer");
const jwt = require("jsonwebtoken");

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

    User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: hashPassword,
      status: USER_STATUS.WAITING_FOR_VERIFY,
      role: USER_ROLE.REGISTER,
    })
      .save()
      .then((result) => {
        const token = result.generateAuthToken();
        console.log(token);
        if (sendEmail(req.body.email, token)) {
          res
            .status(201)
            .send({ message: "check email to verify your account" });
        } else {
          res.status(401).send({ message: "send email failed" });
        }
      });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Internal Server Error" });
  }
};

const sendEmail = async (email, token) => {
  var transporter = nodemailer.createTransport(TransportOptions);
  function send(mail) {
    transporter.sendMail(mail, function (error, info) {
      if (error) {
        return false;
      }
      return true;
    });
  }
  const verify_url = "http://localhost:3000/api/users/verify/" + token;
  var mail = {
    from: ("ECE9065", process.env.EMAIL_USER),
    subject: "verify",
    to: email,
    text: "please click into this url to verify auth: " + verify_url,
  };
  send(mail);
};

exports.verifyAccount = async (req, res) => {
  const { token } = req.params;
  jwt.verify(token, process.env.JWT_PRIVATE_KEY, (err, user) => {
    if (err) {
      return res.sendStatus(403);
    }
    console.log(user);
    User.updateOne(
      { _id: user._id },
      { status: USER_STATUS.ALREADY_SIGN_UP }
    ).then((user) => {
      res.status(201).send({ message: "verify success" });
    });
  });
};

exports.changePassword = async (req, res) => {
  const { error } = ChangePasswordValidate(req.body);
  if (error) return res.status(400).send({ message: error.details[0].message });
  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(401).send({ message: "Email not Exist" });
  const validPassword = await bcrypt.compare(
    req.body.old_password,
    user.password
  );
  if (!validPassword)
    return res.status(401).send({ message: "Invalid Email or Password" });

  const salt = await bcrypt.genSalt(Number(process.env.SALT));

  const hashPassword = await bcrypt.hash(req.body.new_password, salt);
  User.updateOne(
    { email: req.body.email },
    { password: hashPassword}
  )
    .then((result) => {
      res.send({ code: 200, msg: "update password success" });
    })
    .catch((err) => {
      res.send({ code: 500, msg: err });
    });
};

const ChangePasswordValidate = (data) => {
  const schema = Joi.object({
    email: Joi.string().email().required().label("Email"),
    new_password: passwordComplexity().required().label("Password"),
    old_password: Joi.string().required().label("Password"),
  });
  return schema.validate(data);
};
