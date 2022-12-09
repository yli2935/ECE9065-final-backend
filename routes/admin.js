/*
 * @Author: Li yli2935@uwo.ca
 * @Date: 2022-11-26 14:14:14
 * @LastEditors: Li yli2935@uwo.ca
 * @LastEditTime: 2022-12-09 16:45:58
 * @FilePath: /ECE9065-final-backend/routes/admin.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const router = require("express").Router();
const adminController = require('../controllers/admin');
const checkAdminAuth = require("../middlewares/checkAdminAuth");


router.put("/userdisable/:email", adminController.disableUser);
router.put("/userenable/:email", adminController.enableUser);
router.put("/usersetadmin/:email", adminController.setUserAsAdmin);
router.put("/usercanceladmin/:email", adminController.cancelUserAsAdmin);

router.put("/getAllUser", adminController.getUserList);

router.get("/getAllReview", adminController.getAllReview);

router.put("/hideReview", adminController.hideReview);

module.exports = router;

