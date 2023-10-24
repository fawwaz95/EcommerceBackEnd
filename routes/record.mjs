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

router.get("/stripeGetAllProds", async (req, res) => {
  try {
    const products = await stripeSecret.products.list({
      limit: 3,
    });

    const prodList = products.data;
    console.log("All products");
    console.log(prodList);

    res.setHeader('Cache-Control', 'no-store');
    res.json(prodList).status(200);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.post("/Checkout", async (req, res) => {
  const cartItems = req.body.priceIdsArray;

  try {
    const lineItems = cartItems.map((item) => {
      return {
        price: item, 
        quantity: 1, // Adjust the quantity based on your cart later!
      };
    });

    console.log("Line Items for Stripe Checkout:");
    console.log(lineItems);

    const session = await stripeSecret.checkout.sessions.create({
      line_items: lineItems,
      mode: 'payment',
      success_url: `${url}/success`,
      cancel_url: `${url}/cancel`,
    });

    console.log("Stripe Checkout Session created successfully.");
    console.log("Session URL:", session.url);

    res.json({ sessionUrl: session.url });
  } catch (e) {
    console.error("Error on Stripe checkout session:", e);
    res.status(500).json({ error: "An error occurred" });
  }
});



export default router;