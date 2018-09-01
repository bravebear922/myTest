const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
// const bodyparser = require('koa-bodyparser')
const koaBody = require('koa-body');
// const logger = require('koa-logger')
var cors = require('koa2-cors');
const index = require('./routes/index')
const users = require('./routes/users')
const log4js = require('log4js');
const { log: logConfig } = require('./conf/config')
const httpError = require('./middlewares/bernard-http-error')

log4js.configure(logConfig);

var logger = log4js.getLogger('app');
logger.level = "debug";

// error handler
onerror(app)

app.use(httpError())

app.use(json())
// app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))

app.use(cors());

app.use(views(__dirname + '/views', {
  extension: 'nunjucks'
}))

app.use(koaBody({
  multipart: true,
  formidable: {
    maxFileSize: 200*1024*1024
  }
}));

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// routes
app.use(index.routes(), index.allowedMethods())
app.use(users.routes(), users.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
