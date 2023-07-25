const auth = require("../utils/auth");

const db = require("../utils/db");
const Router = require("koa-router");
const add = new Router();

add.post("/", auth,async (ctx) => {
  let data = await new Promise((resolve, reject) => {
    // 获取文章数
    let newId;
    let searchNumsSql = `select max(id) from article;`;

    db.query(searchNumsSql, (err, data) => {
      if (err) {
        reject(err);
      }
      if (data) {
        newId = data[0]["max(id)"] + 1;
      } else newId = 1;
      // 增加文章
      let sql = `INSERT INTO article ( id , title , content , cat , date ) VALUES ('${newId}', '${ctx.request.body.title}', '${ctx.request.body.content}', '${ctx.request.body.cat}', '${ctx.request.body.date}');`;
      db.query(sql, (err, data) => {
        if (err) {
          reject(err);
        }

        resolve({
          code: 200,
          data: "succeed",
        });
      });

      // console.log(data);
      resolve("succeed"); // 返回拿到的数据
    });
  });

  ctx.body = data;
});

module.exports = add;
