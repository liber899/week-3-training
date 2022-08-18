const Router = require("koa-router");

const router = new Router({
  prefix: "/devices",
});

let devices = [
  {
    id: "1",
    deviceName: "TV",
    macAddress: "00:18:44:11:3A:B7",
    ip: "127.0.0.2",
    date: "2021-05-31",
    power: 50,
  },
  {
    id: "2",
    deviceName: "Washer",
    macAddress: "00:18:44:11:3A:B8",
    ip: "127.0.0.3",
    date: "2021-05-31",
    power: 60,
  },
  {
    id: "3",
    deviceName: "Refrigerator",
    macAddress: "00:18:44:11:3A:B7",
    ip: "127.0.0.4",
    date: "2021-05-31",
    power: 80,
  },
  {
    id: "4",
    deviceName: "Selling Fan",
    macAddress: "00:18:44:11:3A:B7",
    ip: "127.0.0.5",
    date: "2021-05-31",
    power: 100,
  },
];

// Routes will go here

module.exports = router;

router.get("/", (ctx, next) => {
  ctx.body = devices;
  next();
});

router.post("/", (ctx, next) => {
  ctx.body = devices.push(ctx.request.body);
  next();
});
