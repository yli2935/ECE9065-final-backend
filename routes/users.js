/*
 * @Author: Li yli2935@uwo.ca
 * @Date: 2022-11-20 11:59:52
 * @LastEditors: Li yli2935@uwo.ca
 * @LastEditTime: 2022-12-04 14:26:20
 * @FilePath: /ECE9065-final-backend/routes/user.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const router = require("express").Router();
const userController = require('../controllers/user');

router.post('/', userController.createAccount);
router.get('/verify/:token', userController.verifyAccount);
module.exports = router;






