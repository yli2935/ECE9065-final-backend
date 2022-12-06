/*
 * @Author: Li yli2935@uwo.ca
 * @Date: 2022-12-05 13:33:26
 * @LastEditors: Li yli2935@uwo.ca
 * @LastEditTime: 2022-12-05 15:11:49
 * @FilePath: /ECE9065-final-backend/routes/policy.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%B
 */
const express = require('express');

const policyController = require('../controllers/policy');
const checkAdminAuth = require("../middlewares/checkAdminAuth");
const router = express.Router();

// /api/policy/get-policy => POST
router.get('/get-policy', policyController.getPolicy);
// /api/policy/update-policy => POST
router.post('/update-policy',checkAdminAuth, policyController.setPolicy);

module.exports = router;