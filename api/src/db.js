import { MongoClient } from "mongodb";

const uri = "mongodb://localhost:27017";

const client = new MongoClient(uri);

const db = client.db("blog");
const passage = db.collection("passage");

module.db = db;
module.passage = passage;
