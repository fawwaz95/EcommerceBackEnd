import express from "express";
import cors from "cors";
import "../db/loadEnvironment.mjs";
import records from "../routes/record.mjs";
import conn from "../db/conn.mjs";
import { Db } from "mongodb";
import path from "path";

const PORT = process.env.PORT || 3001;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static('images'));

app.use("/ecommerce", records);

app.get("/*", function (req, res) {
  const __dirname = path.dirname(new URL(import.meta.url).pathname);
  res.sendFile(path.join(__dirname, "C:/Users/admin/Documents/PersonalProjects/ecommerceapp/frontend/src/index.js"), function (err) {
    console.log("Whats the directory path");
    console.log(__dirname);

    console.log("Whats the req");
    console.log(req);

    if (err) {
      res.status(500).send(err);
    }
  });
});

app.listen(PORT, () => {
  console.log("whats the port " + PORT);
  console.log(`Server is running on port: ${PORT}`);
});


