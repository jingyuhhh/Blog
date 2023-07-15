// const MongoClient = require("mongodb").MongoClient;
// const uri = "mongodb://localhost:27017";

// function find(query) {
//   console.log("YES");
//   return new Promise((resolve, reject) => {
//     MongoClient.connect(uri, (err, client) => {
//       if (err) {
//         console.log("连接错误！" + err);
//         reject(err);
//         return;
//       }
//       const db = client.db("blog");
//       const result = db.collection("passage").find(query);
//       result.toArray((err, docs) => {
//         if (err) {
//           reject(err);
//           return;
//         }
//         resolve(docs);
//       });
//     });
//   });
// }

// exports.find = find;
//不知道为什么，用mongodb总出错

let mysql = require("mysql");

let pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "qwer1234",
  database: "blog",
});
// console.log("mysql pool", pool);
//对数据库进行增删改查操作的基础
function query(sql, callback) {
  pool.getConnection(function (err, connection) {
    connection.query(sql, function (err, rows) {
      callback(err, rows);
      connection.release();
    });
  });
}

exports.query = query;
