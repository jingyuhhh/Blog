const db = require("../utils/db");
const Router = require("koa-router");
const articles = new Router();

articles.get("/", async (ctx) => {
  let data = await new Promise((resolve, reject) => {
    // 倒序查询！！
    let sql = `select id , title , content , cat , DATE_FORMAT(date, '%Y-%m-%d') as date from article order by id desc`;
    db.query(sql, (err, data) => {
      if (err) {
        reject(err);
      }
      resolve(data);
    });
  });

  ctx.set("Cache-control", "max-age=60");
  ctx.body = data;
});

module.exports = articles;
