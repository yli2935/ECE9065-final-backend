/*
 * @Author: Li yli2935@uwo.ca
 * @Date: 2022-11-26 15:31:05
 * @LastEditors: Li yli2935@uwo.ca
 * @LastEditTime: 2022-12-09 16:20:20
 * @FilePath: /ECE9065-final-backend/middlewares/checkAuth.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const jwt = require("jsonwebtoken");
const { User } = require("../models/User");
const { USER_STATUS, USER_ROLE } = require("../config/config");
module.exports = function (req, res, next) {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const token = authHeader;
    jwt.verify(token, process.env.JWT_PRIVATE_KEY, (err, user) => {
      if (err) {
        return res.sendStatus(403);
      }
      User.findOne({ _id: user._id })
        .then((user) => {
          console.log(user);
          if (user.role != USER_ROLE.ADMIN) {
            return res.sendStatus(403);
          }
          req.user = user;
          console.log(user._id);
          next();
        })
        .catch((err) => {
          res.send({ code: 500, msg: err });
        });
    });
  } else {
    res.sendStatus(401);
  }
};
