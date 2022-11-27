/*
 * @Author: Li yli2935@uwo.ca
 * @Date: 2022-11-03 10:39:58
 * @LastEditors: Li yli2935@uwo.ca
 * @LastEditTime: 2022-11-27 17:04:22
 * @FilePath: /ece9065-yli2935-lab3/controllers/list.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const List = require("../models/list");

exports.createList = (req, res, next) => {
  const list_name = req.body.list_name;
  console.log(list_name);
  const creator = req.body.creator;
  console.log(creator);
  const current = getCurrentDate();
  console.log(current)
  const list = new List({
    list_name: list_name,
    tracks_list: [],
    creator:creator,
    last_modify_date:current
  });

  list
    .save()
    .then((result) => {
      console.log("Created List");
      res.send({ code: 200, msg: "success" });
    })
    .catch((err) => {
      res.send({ code: 500, msg: err });
    });
};

exports.getListByName = (req, res, next) => {
  const listName = req.query.listName;
  console.log(listName);
  List.findOne({ list_name: listName })
    .then((tracks) => {
      res.send(tracks);
    })
    .catch((err) => console.log(err));
};

exports.deleteListByName = (req, res, next) => {
  const listName = req.body.listName;
  console.log(listName);
  const options = {};
  List.findOneAndRemove({ list_name: listName })
    .then((err, rawResponse) => {
      console.log(err);
      if (err == null) {
        res.send({ code: 400, msg: "list do not exist" });
      } else {
        res.send({ code: 200, msg: "delete success" });
      }
    })
    .catch((err) => console.log(err));
};


exports.getAllList = (req, res, next) => {
  List.find()
    .then((lists) => {
      const result = [];
      let hours = 0;
      let minuits = 0;
      let second = 0;

      lists.map((list) => {
        list.tracks_list.map((track) => {
          const durationArray = track.track_duration.split(":");
          second = second + parseInt(durationArray[1]);
          if (second >= 60) {
            minuits++;
            second = second % 60;
          }
          minuits = minuits + parseInt(durationArray[0]);
          if (minuits >= 60) {
            hours++;
            minuits = minuits % 60;
          }
        });
        console.log(hours + "-" + minuits + "-" + second);

        result.push({
          list_name: list.list_name,
          num_tracks: list.tracks_list.length,
          hour:hours,
          minuits:minuits,
          second:second
        });
      });
      res.send(result);
    })
    .catch((err) => console.log(err));
};


const getCurrentDate = () =>{
  // 获取当前日期
  var date = new Date();
  // 获取当前月份
  var nowMonth = date.getMonth() + 1; 
  // 获取当前是几号
  var strDate = date.getDate();
  // 添加分隔符“-”
  var seperator = "-";
  // 对月份进行处理，1-9月在前面添加一个“0”
  if (nowMonth >= 1 && nowMonth <= 9) {
    nowMonth = "0" + nowMonth;
  }
  // 对月份进行处理，1-9号在前面添加一个“0”
  if (strDate >= 0 && strDate <= 9) {
    strDate = "0" + strDate;
  }
  // 最后拼接字符串，得到一个格式为(yyyy-MM-dd)的日期
  var nowDate = date.getFullYear() + seperator + nowMonth + seperator + strDate;
  return nowDate;
}
