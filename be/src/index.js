const Koa = require("koa");
const Router = require("koa-router");
const cors = require("koa2-cors");
const { koaBody } = require("koa-body");
const koaStatic = require("koa-static");
const path = require("path");

const app = new Koa();
const router = new Router();

const api = require("./router/index");
app.use(cors());
app.use(koaBody({ multipart: true }));

router.use("/api", api.routes(), api.allowedMethods());
app.use(router.routes(), router.allowedMethods());

app.listen(8888, () => {
  console.log("Server started on http://localhost:8888");
});
