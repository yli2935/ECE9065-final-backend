/*
 * @Author: Li yli2935@uwo.ca
 * @Date: 2022-11-03 10:39:58
 * @LastEditors: Li yli2935@uwo.ca
 * @LastEditTime: 2022-12-12 17:55:39
 * @FilePath: /ece9065-yli2935-lab3/controllers/list.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const List = require("../models/list");

exports.createList = (req, res, next) => {
  const list_name = req.body.list_name;
  console.log(list_name);
  const creator = req.body.creator;
  console.log(creator);
  const description = req.body.description;
  console.log(description);
  const visibility = req.body.visibility;
  console.log(visibility);

  const current = getCurrentDate();
  console.log(current);
  const list = new List({
    list_name: list_name,
    tracks_list: [],
    creator: creator,
    last_modify_date: current,
    description: description ? description : "dont have any description",
    visibility: visibility ? visibility : false,
    review: [],
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
  const authHeader = req.headers.authorization;
  
  List.find()
    .limit(10)
    .then((lists) => {
      const result = [];


      lists.map((list) => {
        let hours = 0;
        let minuits = 0;
        let second = 0;
        console.log(list)
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
        if(list.visibility === true){
          result.push({
            list_id:list._id,
            track_list:list.tracks_list,
            list_name: list.list_name,
            num_tracks: list.tracks_list.length,
            hour: hours,
            minuits: minuits,
            second: second,
            last_modify_date:list.last_modify_date,
            creator:list.creator,
            review:list.review,
            visibility:list.visibility,
            description:list.description
          });
        }

      });
      res.send({ code: 200, lists: result });
    })
    .catch((err) => console.log(err));
};

const getCurrentDate = () => {
  var date = new Date();
  var nowMonth = date.getMonth() + 1;
  var strDate = date.getDate();
  var seperator = "-";
  if (nowMonth >= 1 && nowMonth <= 9) {
    nowMonth = "0" + nowMonth;
  }
  if (strDate >= 0 && strDate <= 9) {
    strDate = "0" + strDate;
  }
  var nowDate = date.getFullYear() + seperator + nowMonth + seperator + strDate;
  return nowDate;
};

exports.addReviewToList = (req, res, next) => {
  const listName = req.body.listName;
  const review = req.body.review;
  const userName = req.body.userName;
  console.log(review)

  List.findOne({ list_name: listName })
    .then((list) => {
      console.log(list)
      if (list === null || list.length === 0) {
        res.send({ code: 400, msg: "list not exixt"});
      } else {
        list.review.push({username:userName,review:review,visibility:true});
        return list.save().then((result) => {
          console.log("UPDATED PRODUCT!");
          res.send({ code: 200, msg: "success" });
        });
      }
    })
    .catch((err) => console.log(err));
};

exports.editList = (req, res, next) => {
  const new_listName = req.body.new_listName;
  const description = req.body.description;
  const visibility = req.body.visibility;
  const old_listName = req.body.old_listName;

  List.findOne({ list_name: old_listName })
    .then((list) => {
      if (list == null || list.length === 0) {
        res.send({ code: 400, msg: "list not exixt"});
      } else {
        list.list_name = new_listName;
        list.description = description;
        list.visibility = visibility;
        return list.save().then((result) => {
          console.log("UPDATED PRODUCT!");
          res.send({ code: 200, msg: "success" });
        });
      }
    })
    .catch((err) => console.log(err));
};

exports.removeTrackFromList = (req, res, next) => {
  const listName = req.body.listName;
  const track_id = req.body.track_id;


  List.findOne({ list_name: listName })
    .then((list) => {
      if (list == null || list.length === 0) {
        res.send({ code: 400, msg: "list not exixt"});
      } else {
        var filtered = list.tracks_list.filter(function(value, index, arr){
          return value.track_id !== track_id;
        });
        list.tracks_list = filtered
        return list.save().then((result) => {
          console.log("UPDATED PRODUCT!");
          res.send({ code: 200, msg: "success" });
        });
      }
    })
    .catch((err) => console.log(err));
};

exports.getListByUser = (req, res, next) => {
  const userName = req.query.userName;
  List.find({ creator: userName })
    .then((list) => {
      res.send({ code: 200, lists: list });
    })
    .catch((err) => res.send({ code: 500, msg: err}));
};
