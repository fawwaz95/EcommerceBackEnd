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
app.use(express.static("public"));

app.use("/ecommerce", records);

app.get("/*", function (req, res) {
  res.send("Catch-all route working!");
});


app.get("/*", function (req, res) {
  const __dirname = path.dirname(new URL(import.meta.url).pathname);
  res.sendFile(path.join(__dirname, "public", "C:/Users/admin/Documents/PersonalProjects/ecommerceapp/frontend/public/index.html"), function (err) {
    console.log("Whats the directory path");
    console.log(__dirname);

    if (err) {
      res.status(500).send(err);
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});


