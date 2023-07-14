const Router = require("koa-router");
const db = require("../utils/db");
const article = new Router();

article.get("/:id", async (ctx) => {
  const id = ctx.params.id;
  let data = await new Promise((resolve, reject) => {
    let sql = `select  id , title , content ,cat, DATE_FORMAT(date, '%Y-%m-%d') as date  from article where id=${id}`;
    db.query(sql, (err, data) => {
      if (err) {
        reject(err);
      }
      resolve(data);
    });
  });
  ctx.body = data;
});

module.exports = article;
