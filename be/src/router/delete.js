const Router = require("koa-router");
const db = require("../utils/db");
const { auth } = require("../utils/auth");
const deleteArticle = new Router();

deleteArticle.get("/:id", auth, async (ctx) => {
  const id = ctx.params.id;
  const sql = `delete from article where id = ${id};`;
  const data = await new Promise((resolve, reject) => {
    db.query(sql, (err, data) => {
      if (err) {
        reject(err);
      }
    });
  });
  ctx.body = data;
});

module.exports = deleteArticle;
