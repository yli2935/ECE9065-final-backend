/*
 * @Author: Li yli2935@uwo.ca
 * @Date: 2022-11-26 14:14:43
 * @LastEditors: Li yli2935@uwo.ca
 * @LastEditTime: 2022-12-09 16:27:30
 * @FilePath: /ECE9065-final-backend/controllers/admin.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

const { USER_STATUS, USER_ROLE } = require("../config/config");
const { User } = require("../models/User");
const Track = require("../models/track");
const List = require("../models/list");

exports.disableUser = async (req, res, next) => {
  const { email } = req.params;
  console.log("disableUseremail", email);
  const user = await User.updateOne(
    { email: email },
    { status: USER_STATUS.NOT_ALLOW }
  );
  res.send({ code: 0, user });
};

exports.enableUser = async (req, res, next) => {
  const { email } = req.params;
  console.log("enableUser", email);
  const data = await User.updateOne(
    { email: email },
    { status: USER_STATUS.ALREADY_SIGN_UP }
  );
  res.send({ code: 0, data });
};

exports.setUserAsAdmin = async (req, res, next) => {
  const { email } = req.params;
  const data = await User.updateOne(
    { email: email },
    { role: USER_ROLE.ADMIN }
  );
  res.send({ code: 0, data });
};

exports.cancelUserAsAdmin = async (req, res, next) => {
  const { email } = req.params;
  const data = await User.updateOne(
    { email: email },
    { role: USER_ROLE.REGISTER }
  );
  res.send({ code: 0, data });
};

exports.getUserList = async (req, res, next) => {
  User.find()
    .then((users) => {
      res.send({ code: 200, user: users });
    })
    .catch((err) => res.send({ code: 500, msg: err }));
};

exports.setTrackDisable = (req, res, next) => {
  const track_id = req.body.trackID;
  Track.findOne({ _id: track_id })
    .then((tracks) => {
      tracks.visibility = false;
      tracks
        .save()
        .then((result) => {
          console.log(result);
          res.send({ code: 200, msg: "success" });
        })
        .catch((err) => res.send({ code: 500, msg: err }));
    })
    .catch((err) => res.send({ code: 500, msg: err }));
};

exports.getAllReview = (req, res, next) => {
  List.find()
    .then((lists) => {
      const result = [];
      lists.map((list) => {
        const listItem = {};
        listItem.list_name = list.list_name;
        listItem.review_list = list.review;
        result.push(listItem);
      });
      res.send({ code: 200, reviews: result });
    })
    .catch((err) => res.send({ code: 500, msg: err }));
};

exports.hideReview = (req, res, next) => {
  const list_name = req.body.listName;
  const review_content = req.body.review;

  List.findOne({ list_name: list_name })
    .then((list) => {

      list.review.map((val, i) => {
        console.log(111,val)
        if (val.review === review_content) {

          list.review.splice(i, 1);
          return;
        }
        return res.status(401).send({  msg: "the review not exist!" });
      });
      
      list
        .save()
        .then((result) => {
          res.send({ code: 200, msg: "delete review_content success" });
        })
        .catch((err) => {
          res.send({ code: 500, msg: err });
        });
    })
    .catch((err) => res.send({ code: 500, msg: err }));
};
