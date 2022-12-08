/*
 * @Author: Li yli2935@uwo.ca
 * @Date: 2022-11-03 10:39:58
 * @LastEditors: Li yli2935@uwo.ca
 * @LastEditTime: 2022-12-05 15:00:52
 * @FilePath: /ece9065-yli2935-lab3/controllers/track.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const Track = require("../models/track");
const List = require("../models/list");

exports.getTrackByTitle = (req, res, next) => {
  const trackTitle = req.query.trackTitle;
  console.log(trackTitle);

  Track.find({ track_title: new RegExp(trackTitle, "i") })
    .limit(20)
    .sort({ CreateTime: 1 })
    .then((tracks) => {
      console.log(tracks);
      resultList = [];
      tracks.map((track)=>{
        const simplify_track = {
          _id:track._id,
          album_id: track.album_id,
          album_title: track.album_title,
          artist_id: track.artist_id,
          artist_name: track.artist_name,
          tags: track.tags,
          track_id:track.track_id,
          track_date_created: track.track_date_created,
          track_date_recorded: track.track_date_recorded,
          track_duration: track.track_duration,
          track_listens: track.track_listens,
          track_number: track.track_number,
          track_title: track.track_title,
          visibility:track.visibility
        };
        resultList.push(simplify_track)

      })

      const result = { length: resultList.length, data: resultList };
      res.send(result);
    })
    .catch((err) => res.send({ code: 500, msg: err }));
};

exports.getTrackByAlbum = (req, res, next) => {
  const albumName = req.query.albumName;
  console.log(albumName);
  Track.find({ album_title: new RegExp(albumName, "i") })
  .limit(20)
  .sort({ CreateTime: 1 })
  .then((tracks) => {
    console.log(tracks);
    resultList = [];
    tracks.map((track)=>{
      const simplify_track = {
        _id:track._id,
        album_id: track.album_id,
        album_title: track.album_title,
        artist_id: track.artist_id,
        artist_name: track.artist_name,
        tags: track.tags,
        track_id:track.track_id,
        track_date_created: track.track_date_created,
        track_date_recorded: track.track_date_recorded,
        track_duration: track.track_duration,
        track_listens: track.track_listens,
        track_number: track.track_number,
        track_title: track.track_title,
        visibility:track.visibility
      };
      resultList.push(simplify_track)

    })

    const result = { length: resultList.length, data: resultList };
    res.send(result);
  })
  .catch((err) => res.send({ code: 500, msg: err }));

}


exports.getTrackByArtist = (req, res, next) => {
  const artistName = req.query.artistName;
  console.log(artistName);
  Track.find({ artist_name: new RegExp(artistName, "i") })
  .limit(20)
  .sort({ CreateTime: 1 })
  .then((tracks) => {
    console.log(tracks);
    resultList = [];
    tracks.map((track)=>{
      const simplify_track = {
        _id:track._id,
        album_id: track.album_id,
        album_title: track.album_title,
        artist_id: track.artist_id,
        artist_name: track.artist_name,
        tags: track.tags,
        track_id:track.track_id,
        track_date_created: track.track_date_created,
        track_date_recorded: track.track_date_recorded,
        track_duration: track.track_duration,
        track_listens: track.track_listens,
        track_number: track.track_number,
        track_title: track.track_title,
        visibility:track.visibility
      };
      resultList.push(simplify_track)

    })

    const result = { length: resultList.length, data: resultList };
    res.send(result);
  })
  .catch((err) => res.send({ code: 500, msg: err }));

}


exports.getTrackByID = (req, res, next) => {
  const trackID = req.query.trackID;
  console.log(trackID);

  Track.findOne({ track_id: trackID })
    .then((track) => {
      
      const result_list = {
        _id:track._id,
        album_id: track.album_id,
        album_title: track.album_title,
        artist_id: track.artist_id,
        artist_name: track.artist_name,
        tags: track.tags,
        track_id:track.track_id,
        track_date_created: track.track_date_created,
        track_date_recorded: track.track_date_recorded,
        track_duration: track.track_duration,
        track_genres: track.track_genres,
        track_number: track.track_number,
        track_title: track.track_title,
        visibility:track.visibility
      };
      const result = {
        length: track.length ? track.length : 1,
        data: result_list,
      };
      res.send(result);
    })
    .catch((err) => res.send({ code: 500, msg: err }));
};

exports.saveTrackToList = (req, res, next) => {
  const listName = req.body.listName;
  const track = req.body.track;
  console.log(listName);
  console.log(track);

  List.findOne({ list_name: listName })
    .then((list) => {
      if (list == null || list.length === 0) {
        res.send({ code: 400, msg: "list not exixt" });
      } else {
        list.tracks_list.push(track);
        return list.save().then((result) => {
          console.log("UPDATED PRODUCT!");
          res.send({code:200,msg:'success'});
        });
      }
    })

    .catch((err) => res.send({ code: 500, msg: err }));
};

exports.hidetrack = (req, res, next) => {
  const trackID = req.body.trackID;
  Track.findOne({_id : trackID}).then((tracks) => {
    tracks.visibility = false;
    tracks.save().then((result) => {
      console.log(result)
      res.send({code:200,msg:'success'});
    }).catch((err) => res.send({ code: 500, msg: err }));
    
  })
}