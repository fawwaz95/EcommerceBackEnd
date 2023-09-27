import express from "express";
import db from "../db/conn.mjs";
import { ObjectId } from "mongodb";
import data from "../db/data.js";

const router = express.Router();
const shopCollection = await db.collection("shop");


//This section will help you get a list of all the records.
router.get("/Shop", async (req, res) => {
  await data();
  const results = await shopCollection.find({}).toArray();
  console.log(`/Shop results`);
  console.log(results);
  res.send(results).status(200);
});

router.get("/ProductID/:id", async (req, res) => {
  const prodId = req.params.id;
  console.log(`whats the prodId we are sending to mongodb ${prodId}`);
  const results = await shopCollection.find({ "_id": prodId }).toArray();
  console.log("/ProductID/:id results")
  console.log(results);

  res.send(results).status(200);
});

router.get("/Item/:item", async (req, res) => {
  const prodName = req.params.item;
  const results = await shopCollection.find({"item": {$regex: prodName, $options: "i"}}).toArray();
  console.log("/Item/:item results");
  console.log(results);
  res.send(results).status(200);
});
// This section will help you get a single record by id
/*router.get("/:id", async (req, res) => {
  let collection = await db.collection("shop");
  let query = {_id: new ObjectId(req.params.id)};
  let result = await collection.findOne(query);

  if (!result) res.send("Not found").status(404);
  else res.send(result).status(200);
});

// This section will help you create a new record.
router.post("/", async (req, res) => {
  let newDocument = {
    name: req.body.name,
    position: req.body.position,
    level: req.body.level,
  };
  let collection = await db.collection("shop");
  let result = await collection.insertOne(newDocument);
  res.send(result).status(204);
});

// This section will help you update a record by id.
router.patch("/:id", async (req, res) => {
  const query = { _id: new ObjectId(req.params.id) };
  const updates =  {
    $set: {
      name: req.body.name,
      position: req.body.position,
      level: req.body.level
    }
  };

  let collection = await db.collection("shop");
  let result = await collection.updateOne(query, updates);

  res.send(result).status(200);
});

// This section will help you delete a record
router.delete("/:id", async (req, res) => {
  const query = { _id: new ObjectId(req.params.id) };

  const collection = db.collection("shop");
  let result = await collection.deleteOne(query);

  res.send(result).status(200);
});*/

export default router;