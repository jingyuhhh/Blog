import { passage } from "../db";

export const postController = async function (req, res) {
  await passage.insertOne(req.body);
};
