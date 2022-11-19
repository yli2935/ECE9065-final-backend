/*
 * @Author: Li yli2935@uwo.ca
 * @Date: 2022-11-19 13:16:16
 * @LastEditors: Li yli2935@uwo.ca
 * @LastEditTime: 2022-11-19 16:14:41
 * @FilePath: /ECE9065-final-backend/app.js
*/
const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const DBConnection = require("./db");
const cors = require('cors');

const app = express();
app.use(cors());



app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));
DBConnection();
app.listen(3000, console.log(`Listening on port ${3000}...`));

// mongoose
//   .connect(
//     "mongodb+srv://admin:lYGWZW424@cluster0.yzqz4.mongodb.net/shop?retryWrites=true&w=majority",
//     { 
//       useNewUrlParser: true,
//       useFindAndModify: false,
//       useUnifiedTopology: true,
//       useCreateIndex: true 
//     }
//   )
//   .then((result) => {
//     User.findOne({ title: "aaa" }).then((user) => {
//       console.log(user);
//     });
//     app.listen(3000);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
