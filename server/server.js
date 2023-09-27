import express from "express";
import cors from "cors";
import "../db/loadEnvironment.mjs";
import records from "../routes/record.mjs";
import conn from "../db/conn.mjs";
import { Db } from "mongodb";

const PORT = process.env.PORT || 3001;
const app = express();
const path = require("path");

app.use(cors());
app.use(express.json());
app.use(express.static('images'));

app.use("/ecommerce", records);

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "C:/Users/admin/Documents/PersonalProjects/ecommerceapp/frontend/src/App.js"), function (err) {
    console.log("Whats the directory path");

    if (err) {
      res.status(500).send(err);
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});


