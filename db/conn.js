const { MongoClient } = require("mongodb");
const data = require('./data.js');

const url = "mongodb+srv://fawwaz:throwback@cluster.eitjutm.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(url);
let conn;

const connectToMongoDB = async () => {
  console.log("callling connectToMongoDB......");
  try {
    conn = await client.connect();
    console.log("Successful connection to MongoDB Atlas");
  } catch (error) {
    console.log("ERROR connectToMongoDB");
    console.error(error);
  }
  /*finally {
    await client.close();
  }*/
};

// Function to get the database connection
const getDBConnection = async () => {
  console.log("calling getDBConnection......");
  if (!conn) {
    await connectToMongoDB();
  }
  console.log("Connected to db!");

  return conn.db("ecommerce_db");
};

module.exports = getDBConnection;
