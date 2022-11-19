/*
 * @Author: Li yli2935@uwo.ca
 * @Date: 2022-11-19 13:22:45
 * @LastEditors: Li yli2935@uwo.ca
 * @LastEditTime: 2022-11-19 13:24:00
 * @FilePath: /ECE9065-final-backend/db.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const mongoose = require("mongoose");

module.exports = () => {
    const connectionParams = {
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
        useCreateIndex: true 
    };
    const DB_URl = "mongodb+srv://admin:lYGWZW424@cluster0.yzqz4.mongodb.net/shop?retryWrites=true&w=majority";
    try {
      mongoose.connect(DB_URl, connectionParams);
      console.log("Connected to database successfully");
    } catch (error) {
      console.log(error);
      console.log("Could not connect database!");
    }
  };