const router = require('koa-router')()
var path = require('path')
const controllers = require('require-all')({
  dirname: path.resolve(__dirname, '../controllers'),
})


router.get('/', controllers.index.greetingToBernard);

router.get('/bernard', controllers.index.greetingToBernard);

router.post('/doLogin', controllers.index.doLogin);

router.post('/getTestTable', controllers.index.getTestTable);

router.post('/getAllProjects', controllers.index.getAllProjects);

router.post('/deleteProject', controllers.index.deleteProject);

router.post('/insertProject', controllers.index.insertProject);

router.post('/insertUser', controllers.index.insertUser);

router.get("/trx", controllers.index.doTrx);

router.get("/fail", controllers.index.loginFail);

// router.get('/string', async (ctx, next) => {
//   ctx.body = 'koa2 string'
// })

// router.get('/json', async (ctx, next) => {
//   ctx.body = {
//     title: 'koa2 json'
//   }
// })

module.exports = router
