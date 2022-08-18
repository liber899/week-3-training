const Router = require("koa-router");

const router = new Router({
  prefix: "/devicelog",
});

const data = [
  {
    id: "101",
    deviceName: "TV",
    action: "Turn On",
    date: "124689",
  },
  {
    id: "102",
    deviceName: "Washer",
    action: "Sleep",
    date: "124689",
  },
  {
    id: "103",
    deviceName: "Celling Fan",
    action: "Turn of",
    date: "124689",
  },
  {
    id: "104",
    deviceName: "TV",
    action: "Turn On",
    date: "124689",
  },
  {
    id: "105",
    deviceName: "Washer",
    action: "Sleep",
    date: "124689",
  },
  {
    id: "106",
    deviceName: "Celling Fan",
    action: "Turn of",
    date: "124689",
  },
  {
    id: "107",
    deviceName: "TV",
    action: "Turn On",
    date: "124689",
  },
  {
    id: "108",
    deviceName: "Washer",
    action: "Sleep",
    date: "124689",
  },
  {
    id: "109",
    deviceName: "Celling Fan",
    action: "Turn of",
    date: "124689",
  },
  {
    id: "110",
    deviceName: "TV",
    action: "Turn On",
    date: "124689",
  },
  {
    id: "112",
    deviceName: "Washer",
    action: "Sleep",
    date: "124689",
  },
  {
    id: "113",
    deviceName: "Celling Fan",
    action: "Turn of",
    date: "124689",
  },
  {
    id: "114",
    deviceName: "TV",
    action: "Turn On",
    date: "124689",
  },
  {
    id: "115",
    deviceName: "Washer",
    action: "Sleep",
    date: "124689",
  },
  {
    id: "116",
    deviceName: "Celling Fan",
    action: "Turn of",
    date: "124689",
  },
  {
    id: "117",
    deviceName: "TV",
    action: "Turn On",
    date: "124689",
  },
  {
    id: "118",
    deviceName: "Washer",
    action: "Sleep",
    date: "124689",
  },
  {
    id: "119",
    deviceName: "Celling Fan",
    action: "Turn of",
    date: "124689",
  },
  {
    id: "120",
    deviceName: "TV",
    action: "Turn On",
    date: "124689",
  },
  {
    id: "121",
    deviceName: "Washer",
    action: "Sleep",
    date: "124689",
  },
  {
    id: "122",
    deviceName: "Celling Fan",
    action: "Turn of",
    date: "124689",
  },
  {
    id: "123",
    deviceName: "TV",
    action: "Turn On",
    date: "124689",
  },
  {
    id: "124",
    deviceName: "Washer",
    action: "Sleep",
    date: "124689",
  },
  {
    id: "125",
    deviceName: "Celling Fan",
    action: "Turn of",
    date: "124689",
  },
  {
    id: "126",
    deviceName: "TV",
    action: "Turn On",
    date: "124689",
  },
  {
    id: "127",
    deviceName: "Washer",
    action: "Sleep",
    date: "124689",
  },
  {
    id: "128",
    deviceName: "Celling Fan",
    action: "Turn of",
    date: "124689",
  },
];

// Routes will go here

module.exports = router;

router.get("/", (ctx, next) => {
  const { q } = ctx.request.query;
  const key = "deviceName";

  const search = (data) => {
    return data.filter((item) => item[key].toLowerCase().includes(q));
  };
  if (q) {
    ctx.body = search(data);
  } else {
    ctx.body = data;
  }

  next();
});

router.post("/", (ctx, next) => {
  ctx.body = data.push(ctx.request.body);
  next();
});
