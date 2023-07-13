const Router = require("koa-router");
const db = require("../utils/db.js");
const router = new Router();

const article = require("./article");
const articles = require("./articles.js");
const add = require("./add.js");

router.use("/article", article.routes(), article.allowedMethods());
router.use("/articles", articles.routes(), articles.allowedMethods());
router.use("/add", add.routes(), add.allowedMethods());

module.exports = router;
