import { passage } from "../db.js";

export const getPost = async (req, res) => {
  const id = req.params.id;
  console.log(id);
  // console.log(passage);
  // passage.find({ title: "b" }).toArray((err, data) => {
  //   if (err) {
  //     console.log(err);
  //     return res.status(500).json({ error: "Error!" });
  //   }
  //   console.log(data);
  //   return res.json(data);
  // });
  console.log("YES");
  const cursor = passage.find();
  console.log("aaaa");
  // console.log(passage);
  // const results = await cursor.toArray();
  const cnt = await passage.countDocuments();
  console.log(cnt);
  cursor.next().then(() => {
    console.log("YES");
  });
  console.log("ohohoh");
  // console.log(results);
};
