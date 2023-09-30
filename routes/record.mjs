import express from "express";
import db from "../db/conn.mjs";
import { ObjectId } from "mongodb";
import data from "../db/data.js";

const router = express.Router();
const shopCollection = await db.collection("shop");

/*router.get("/", async (req, res) => {
  await data();
  res.send.status(200);
});

router.get("/Home", async (req, res) => {
  await data();
  res.send.status(200);
});*/

router.get("/Shop", async (req, res) => {
  const results = await shopCollection.find({}).toArray();
  res.send(results).status(200);
});

router.get("/ProductID/:id", async (req, res) => {
  const prodId = req.params.id;
  const results = await shopCollection.find({ "_id": prodId }).toArray();
  res.send(results).status(200);
});

router.get("/Item/:item", async (req, res) => {
  const prodName = req.params.item;
  const results = await shopCollection.find({"item": {$regex: prodName, $options: "i"}}).toArray();
  res.send(results).status(200);
});


/*router.get("/*", function (req, res) {
  const __dirname = path.dirname(new URL(import.meta.url).pathname);
  res.sendFile(path.join(__dirname, "public", "C:/Users/admin/Documents/PersonalProjects/ecommerceapp/frontend/public/index.html"), function (err) {
    console.log("Whats the directory path");
    console.log(__dirname);

    if (err) {
      res.status(500).send(err);
    }
  });
});*/


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