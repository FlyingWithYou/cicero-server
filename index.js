const Koa = require("koa");
const Router = require("koa-router");
const app = new Koa();
const router = new Router();
const sang = require('./src/sang');

router.get('/sang', sang);


app.use(router.routes());

app.listen(3000);