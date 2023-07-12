import { passage } from "../db.js";

export const postController = async function (req, res) {
  await passage.insertOne(req.body);
};
