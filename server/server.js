import express from "express";
import cors from "cors";
import "../db/loadEnvironment.mjs";
import records from "../routes/record.mjs";
import conn from "../db/conn.mjs";
import { Db } from "mongodb";

const PORT = process.env.PORT || 3001;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static('images'));

app.use("/ecommerce", records);

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});


