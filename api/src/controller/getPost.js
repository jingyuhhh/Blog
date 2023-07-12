import { passage } from "../db";

export const getPost = (req, res) => {
  const id = req.params.id;
  console.log(id);
  passage.find({ title: "b" }).toArray((err, data) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ error: "Error!" });
    }
    console.log(data);
    return res.json(data);
  });
};
