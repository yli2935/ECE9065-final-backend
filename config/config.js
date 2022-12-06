/*
 * @Author: Li yli2935@uwo.ca
 * @Date: 2022-11-26 14:07:05
 * @LastEditors: Li yli2935@uwo.ca
 * @LastEditTime: 2022-12-04 12:52:34
 * @FilePath: /ECE9065-final-backend/config/config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const USER_STATUS = {
    NOT_SIGN_UP: 1,
    WAITING_FOR_VERIFY: 1 << 1,
    ALREADY_SIGN_UP: 1 << 2,
    NOT_ALLOW : 1 << 3
}

const USER_ROLE = {
    GUEST: 1,
    REGISTER: 1 << 1,
    ADMIN: 1 << 2
}

const TransportOptions = {
    host: process.env.EMAIL_HOST, 
    port: 465, 
    auth: {
      user: process.env.EMAIL_USER, 
      pass: process.env.EMAIL_PASS, 
    },
  };


Object.freeze(USER_STATUS);
Object.freeze(USER_ROLE);
module.exports = {USER_STATUS,USER_ROLE,TransportOptions};
