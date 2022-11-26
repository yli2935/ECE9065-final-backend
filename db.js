/*
 * @Author: Li yli2935@uwo.ca
 * @Date: 2022-11-19 13:22:45
 * @LastEditors: Li yli2935@uwo.ca
 * @LastEditTime: 2022-11-26 13:48:46
 * @FilePath: /ECE9065-final-backend/db.js
*/
const mongoose = require("mongoose");

module.exports = () => {
    const connectionParams = {
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
        useCreateIndex: true 
    };
    //const DB_URl = "mongodb+srv://admin:lYGWZW424@cluster0.yzqz4.mongodb.net/shop?retryWrites=true&w=majority";
    const DB_URl = process.env.DB_URl
    try {
      mongoose.connect(DB_URl, connectionParams);
      console.log("Connected to database successfully");
    } catch (error) {
      console.log(error);
      console.log("Could not connect database!");
    }
  };