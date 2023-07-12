import { MongoClient } from "mongodb";

const uri = "mongodb://localhost:27017";

const client = new MongoClient(uri);

client.connect();

export const db = client.db("blog");
export const passage = db.collection("passage");
