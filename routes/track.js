/*
 * @Author: Li yli2935@uwo.ca
 * @Date: 2022-11-28 15:46:50
 * @LastEditors: Li yli2935@uwo.ca
 * @LastEditTime: 2022-12-05 16:28:00
 * @FilePath: /ECE9065-final-backend/routes/track.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const express = require('express');

const trackController = require('../controllers/track');

const router = express.Router();
const checkAdminAuth = require("../middlewares/checkAdminAuth");

// /api/track/get-tracks-title => GET
router.get('/get-tracks-title', trackController.getTrackByTitle);
// /api/track/get-tracks-id => GET
router.get('/get-tracks-id', trackController.getTrackByID);
// /api/track/save-tracks-toList => POST
router.post('/save-tracks-toList', trackController.saveTrackToList);
// /api/track/get-tracksByArtist => GET
 router.get('/get-tracksByArtist', trackController.getTrackByArtist);
// /api/track/get-tracksByAlbum => GET
router.get('/get-tracksByAlbum', trackController.getTrackByAlbum);
// /api/track/hide-track => POST
router.post('/hide-track',checkAdminAuth, trackController.hidetrack);
module.exports = router;