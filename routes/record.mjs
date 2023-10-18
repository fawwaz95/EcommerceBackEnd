import express from "express";
import db from "../db/conn.mjs";
import { ObjectId } from "mongodb";
import data from "../db/data.js";
import stripe from "stripe";

const router = express.Router();
const shopCollection = await db.collection("shop");
const url = "https://paixamour.netlify.app/"
const stripeSecret = await stripe("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");

/*
router.get("/", async (req, res) => {
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

router.post("/Checkout", async (req, res) => {
  const cartItems = req.body.items.line_items;
  console.log("Whats the cartItems obj");
  console.log(cartItems);

  res.send("Checkout endpoint located").status(200);


  /*const session = await stripeSecret.checkout.sessions.create({
    line_items: [
      {
        // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
        price: pr_1234,
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `${url}/success`,
    cancel_url: `${url}/cancel`,
  });

  res.redirect(303, session.url);*/
});

export default router;