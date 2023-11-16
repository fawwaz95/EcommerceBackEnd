const { MongoClient } = require("mongodb");
const data = require('./data.js');

const url = "mongodb+srv://fawwaz:throwback@cluster.eitjutm.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(url);
let conn;

const connectToMongoDB = async () => {
  try {
    conn = await client.connect();
    console.log("Successful connection to MongoDB Atlas");
  } catch (error) {
    console.error(error);
  }
  /*finally {
    await client.close();
  }*/
};

// Function to get the database connection
const getDBConnection = async () => {
  if (!conn) {
    await connectToMongoDB();
  }
  return conn.db("ecommerce_db");
};

module.exports = getDBConnection;
