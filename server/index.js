const koa = require("koa");
const json = require("koa-json");
const koaBody = require("koa-body");
const koaRouter = require("koa-router");
const cors = require("@koa/cors");

const app = new koa();

const router = new koaRouter();

app.use(router.routes()).use(router.allowedMethods());

app.use(cors());

app.use(json());

app.use(koaBody());

let devices = require("./devices.js");

let devicelog = require("./devicelog.js");

app.use(devices.routes());

app.use(devicelog.routes());

app.listen(4000, () => {
  console.log("server is running on port 4000");
});
