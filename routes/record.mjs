import express from "express";
import db from "../db/conn.mjs";
import { ObjectId } from "mongodb";
import data from "../db/data.js";
import stripe from "stripe";

const router = express.Router();
const shopCollection = await db.collection("shop");
const url = "https://paixamour.netlify.app/"
const stripeLiveSecret = await stripe("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");
const stripeTestSecret = await stripe("sk_test_51NsCgFAPtj0Vd4Luk30RAsMz8znGEQvepK26102pX4KXgUSBDuEQYleMI4tmM2lcYDjeoB2p47FAyTOIaJ6v5mkQ00Mfe4rjfW");

const formatProdName = (prodName) => {
  const productName = prodName.toLowerCase().replace(/\s/g, '');
  return productName;
}
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

router.post("/stripeGetProds", async (req, res) => {
  const cartItems = req.body.cart;

  try {
    const products = await stripeTestSecret.products.list({
      limit: 10,
    });

    const prodList = products.data;

    const productArray = prodList.flatMap(prodItems => {
      const cartObj = cartItems.find(cart => {
        const cartItemProd = formatProdName(cart._id);
        const stripeProd = formatProdName(prodItems.description);

        return cartItemProd.includes(stripeProd);
      });

      if (cartObj && cartObj !== undefined) {
        return {
          priceId: prodItems.default_price,
          prodName: prodItems.description,
          qty: cartObj.quantity
        };
      }
    });

    const removeUndefined = productArray.filter(item => item !== undefined);
    const productCartArray = removeUndefined;

    console.log("productCartArray /stripeGetProds");
    console.log(productCartArray);

    res.setHeader('Cache-Control', 'no-store');
    res.json(productCartArray).status(200);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.post("/Checkout", async (req, res) => {
  const cartProdsArray = req.body.prodArray;

  try {
    const lineItems = cartProdsArray.map((item) => {
      return {
        price: item.priceId, 
        quantity: item.qty, 
      };
    });

    const session = await stripeTestSecret.checkout.sessions.create({
      line_items: lineItems,
      mode: 'payment',
      success_url: `${url}/order/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${url}/cancel`,
    });

    console.log("Session URL: ", session.url);

    res.json({ sessionUrl: session.url });
  } catch (e) {
    console.error("Error on Stripe checkout session:", e);
    res.status(500).json({ error: "An error occurred" });
  }
});

router.get(`order/success?session_id={CHECKOUT_SESSION_ID}`, async (req, res) => {
  console.log("inside order/success");
  const session = await stripe.checkout.sessions.retrieve(req.query.session_id);
  const customer = await stripe.customers.retrieve(session.customer);

  res.send(`<html><body><h1>Thanks for your order, Testing Name!</h1></body></html>`);
});

export default router;