"use strict";

const express = require("express");
const cors = require("cors");
require("../db/loadEnvironment.js");
const records = require("../routes/record.js");
const conn = require("../db/conn.js");
const {
  Db
} = require("mongodb");
const path = require("path");
require('@babel/register');
const PORT = process.env.PORT || 3001;
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("public"));
app.use("/ecommerce", records);
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});