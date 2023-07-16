const Router = require("koa-router");
const db = require("../utils/db.js");
const router = new Router();

const article = require("./article");
const articles = require("./articles.js");
const add = require("./add.js");
const deleteArticle = require("./delete.js");
const user = require("./user")

router.use("/article", article.routes(), article.allowedMethods());
router.use("/articles", articles.routes(), articles.allowedMethods());
router.use("/add", add.routes(), add.allowedMethods());
router.use("/delete", deleteArticle.routes(), deleteArticle.allowedMethods());
router.use("/user", user.routes(), user.allowedMethods());

module.exports = router;
