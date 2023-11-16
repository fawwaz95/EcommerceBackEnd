const express = require("express");
const db = require("../db/conn.js");
const data = require("../db/data.js");
const stripe = require("stripe");
const ReactDOMServer = require('react-dom/server');

const url = "https://paixandamourserver.onrender.com/ecommerce"
//const stripeLiveSecret = await stripe("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");
//const SuccessfulPayment = require('../../frontend/src/components/SuccessfulPayment.js');

const router = express.Router();

const formatProdName = (prodName) => {
  const productName = prodName.toLowerCase().replace(/\s/g, '');
  return productName;
}

router.get("/Shop", async (req, res) => {
  const shopCollection = await db.collection("shop");
  const results = await shopCollection.find({}).toArray();
  res.send(results).status(200);
});

router.get("/ProductID/:id", async (req, res) => {
  const shopCollection = await db.collection("shop");
  const prodId = req.params.id;
  const results = await shopCollection.find({ "_id": prodId }).toArray();
  res.send(results).status(200);
});

router.get("/Item/:item", async (req, res) => {
  const shopCollection = await db.collection("shop");
  const prodName = req.params.item;
  const results = await shopCollection.find({"item": {$regex: prodName, $options: "i"}}).toArray();
  res.send(results).status(200);
});

router.post("/stripeGetProds", async (req, res) => {
  const cartItems = req.body.cart;

  try {
    const stripeTestSecret = stripe("sk_test_51NsCgFAPtj0Vd4Luk30RAsMz8znGEQvepK26102pX4KXgUSBDuEQYleMI4tmM2lcYDjeoB2p47FAyTOIaJ6v5mkQ00Mfe4rjfW");

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

router.get("/session_status", async (req, res) => {
  try {
    const stripeTestSecret = stripe("sk_test_51NsCgFAPtj0Vd4Luk30RAsMz8znGEQvepK26102pX4KXgUSBDuEQYleMI4tmM2lcYDjeoB2p47FAyTOIaJ6v5mkQ00Mfe4rjfW");
    const session = await stripeTestSecret.checkout.sessions.retrieve(req.query.session_id);

    const retrieveSession = {
      status: session.customer_details.status,
      payment_status: session.payment_status,
      customer_name: session.customer_details.name,
      customer_email: session.customer_details.email,
    }

    /*res.send(`<div>
      <div> Sending custom payment component </div>
      <div> ${ReactDOMServer.renderToString(SuccessfulPayment.default ? SuccessfulPayment.default : SuccessfulPayment)} </div> 
    </div>`);*/

    res.send("SUCCESSFUL PAYMENT");

  } catch (error) {
    console.error("Error on retrieving session:", error);
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

    const stripeTestSecret = stripe("sk_test_51NsCgFAPtj0Vd4Luk30RAsMz8znGEQvepK26102pX4KXgUSBDuEQYleMI4tmM2lcYDjeoB2p47FAyTOIaJ6v5mkQ00Mfe4rjfW");

    const session = await stripeTestSecret.checkout.sessions.create({
      line_items: lineItems,
      mode: 'payment',
      success_url: `${url}/session_status?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${url}/cancel`,
    });

    res.json({sessionUrl: session.url}).status(200);

  } catch (error) {
    console.error("Error on Stripe checkout session:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
