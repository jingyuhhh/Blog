const Koa = require("koa");
const Router = require("koa-router");
const cors = require("koa2-cors");
const { koaBody } = require("koa-body");
const serve = require('koa-static');
const path = require('path');

const app = new Koa();
const router = new Router();
const port = 87;

const api = require("./router/index.js");
app.use(cors());
app.use(koaBody({ multipart: true }));
app.use(serve(path.join(__dirname, './build')));

router.use("/api", api.routes(), api.allowedMethods());
app.use(router.routes(), router.allowedMethods());

app.listen(port,()=>{
    console.log(`server is running at http://localhost:${port}`);
});
