/*
 * @Author: Li yli2935@uwo.ca
 * @Date: 2022-11-27 17:00:29
 * @LastEditors: Li yli2935@uwo.ca
 * @LastEditTime: 2022-12-05 15:40:12
 * @FilePath: /ECE9065-final-backend/routes/list.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const express = require('express');

const listController = require('../controllers/list');

const router = express.Router();

// /lists/create-list => POST
router.post('/create-list', listController.createList);
// /lists/getList-name => POST
router.get('/getList-name', listController.getListByName);
// /lists/delete-byName => POST
router.post('/delete-byName', listController.deleteListByName);
// /lists/getAllList => GET
router.get('/getAllList', listController.getAllList);
// /lists/getAllList => GET
router.post('/addReview', listController.addReviewToList);

module.exports = router;