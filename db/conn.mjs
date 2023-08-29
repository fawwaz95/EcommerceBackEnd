import { MongoClient } from "mongodb";
import data from './data.js';

const url = "mongodb+srv://fawwaz:throwback@cluster.eitjutm.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(url);
let conn;

try {
  conn = await client.connect();
  console.log("Successful connection to MongoDB Atlas");
} catch (error) {
  console.error(error);
} /*finally {
    await client.close();
  }*/

let db = conn.db("ecommerce_db");

export default db;