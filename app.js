/*
 * @Author: Li yli2935@uwo.ca
 * @Date: 2022-11-19 13:16:16
 * @LastEditors: Li yli2935@uwo.ca
 * @LastEditTime: 2022-12-05 13:40:27
 * @FilePath: /ECE9065-final-backend/app.js
*/
const dotenv = require("dotenv");
dotenv.config();

const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const DBConnection = require("./db");
const cors = require('cors');

const app = express();
DBConnection();
app.use(cors());

const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
const adminRoutes = require("./routes/admin");
const listsRoutes = require("./routes/list");
const trackRoutes = require("./routes/track");
const policyRoutes = require("./routes/policy");
const checkAdminAuth = require("./middlewares/checkAdminAuth");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));


app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/admin",checkAdminAuth, adminRoutes);
app.use("/api/lists", listsRoutes);
app.use("/api/track", trackRoutes);
app.use("/api/policy", policyRoutes);
app.listen(3000,'0.0.0.0', console.log(`Listening on port ${3000}...`));


