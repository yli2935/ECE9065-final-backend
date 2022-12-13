/*
 * @Author: Li yli2935@uwo.ca
 * @Date: 2022-12-05 13:27:31
 * @LastEditors: Li yli2935@uwo.ca
 * @LastEditTime: 2022-12-11 10:14:25
 * @FilePath: /ECE9065-final-backend/controllers/policy.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const { Policy } = require("../models/policy");

exports.getPolicy = (req, res, next) => {
  const type = req.query.type ? req.query.type : "policy";

  Policy.findOne({ type: type }).then((policy) => {
    if (policy) {
      console.log(policy.content);
      res.send({ code: 200, content: policy.content });
    } else {
      res.send({ code: 400, msg: "policy not exixt" });
    }
  });
};

exports.setPolicy = (req, res, next) => {
  const content = req.body.content;
  const type = req.body.type ? req.body.type : "policy";
  const time = new Date().toLocaleString();
  Policy.findOne({ type: type })
    .then((policy) => {
      if (policy) {
        policy.content = content;

        policy.time = time;
        return policy
          .save()
          .then((result) => {
            console.log("UPDATED policy");
            res.send({ code: 200, msg: "UPDATED policy" });
          })
          .catch((err) => {
            res.send({ code: 500, msg: err });
          });
      } else {
        // res.send({ code: 400, msg: "policy not exixt" });
        const policy = new Policy({
          type: type,
          content: content,
          time: time,
        });
        policy
          .save()
          .then((result) => {
            console.log("Created New Policy");
            res.send({ code: 200, msg: "Created New Policy success" });
          })
          .catch((err) => {
            res.send({ code: 500, msg: err });
          });
      }
    })
    .catch((err) => res.send({ code: 500, msg: err }));
};
