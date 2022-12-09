/*
 * @Author: Li yli2935@uwo.ca
 * @Date: 2022-11-20 12:16:20
 * @LastEditors: Li yli2935@uwo.ca
 * @LastEditTime: 2022-12-09 10:46:41
 * @FilePath: /ECE9065-final-backend/routes/auth.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const router = require("express").Router();
const authController = require('../controllers/auth');


router.post('/', authController.login);

router.post('/googleLogin', authController.googleLogin);
module.exports = router;