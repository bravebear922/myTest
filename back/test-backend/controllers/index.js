const log4js = require('log4js');
// const logConfig = require('../config/logConfig.json')
const { log: logConfig } = require('../conf/config')
log4js.configure(logConfig);

// var mysqlDao = require('../dao/mysqlDao')
const util = require('../utils/util')
const userService = require('../service/userService')

var logger = log4js.getLogger('index');
logger.level = "debug";

const greetingToBernard = async(ctx, next) => {
  logger.info("hello bernard");

  // 使用util中提供的getDao方法 确保dao对象只会被实例化一次
  var dao = util.getDao();
  // var res = await mysql.select("select * from bernardpte.user");
  // 使用这种方式可以保证在controller或者service层调用数据库操作时不会牵涉到sql语句 做到了数据层和控制层以及业务逻辑层分离
  // SQL语句统一放到了常量中 有一个统一编辑修改的地方

  

  // var res = await dao.getUsers(user);
  var res = await dao.select("select * from test_table");

  console.log(res)
  
  await ctx.render('bernard', {
    title: 'Hello bernard!',
    username: "Bernard"
  })
}

const loginFail = async(ctx, next) => {
	// await ctx.render('error', {
	//     message: "登录出错了，估计你是手误了，请温柔的再输入一次!",
	//     error: {
	//       status: 500,
	//       stack: ""
	//     }
	// })

  let err = {
    status: 500
  }

  throw err;
}

const doLogin = async(ctx, next) => {
	logger.info("do login")
	const {user, pass} = ctx.request.body
  console.log(user+ " " + pass)
  let flag = await userService.login(user, pass);
  console.log(flag)
  if(flag){
      ctx.response.type = "json";
      ctx.response.body = {username: user, password: pass};
  }else{
      // 登录不成功
      console.log("login fail")
      ctx.response.type = "json";
      ctx.response.body = {username: "", password: ""};
  }
}

const getAllProjects = async(ctx, next) => {
  logger.info("getAllProjects")
  let resp = await userService.getAllProjects();
  console.log(resp)
  ctx.response.type = "json";
  ctx.response.body = resp;
 
}

const deleteProject = async(ctx, next) => {
  logger.info("deleteProject")
  const {id} = ctx.request.body
  let resp = await userService.deleteProject(id);
  console.log(resp)
  ctx.response.type = "json";
  ctx.response.body = resp;
 
}

const insertProject = async(ctx, next) => {
  logger.info("deleteProject")
  let param = ctx.request.body
  console.log(param)
  let resp = await userService.insertProject(param);
  console.log(resp)
  ctx.response.type = "json";
  ctx.response.body = resp;
 
}

const insertUser = async(ctx, next) => {
  logger.info("insertUser")
  let param = ctx.request.body
  console.log(param)
  let resp = await userService.insertUser(param);
  console.log(resp)
  ctx.response.type = "json";
  ctx.response.body = resp;
 
}

const getTestTable = async(ctx, next) => {
  logger.info("getTestTable")
  
  let dao = util.getDao();
  let resp = await dao.select("select * from test_table");
  console.log(resp)

  ctx.response.type = "json";
  ctx.response.body = resp;
}

const doTrx = async(ctx, next) => {
  console.log("doTrx")
  var dao = util.getDao();
  dao.transactionTest();
}

module.exports = { greetingToBernard, doLogin, doTrx, loginFail, getTestTable, getAllProjects, deleteProject, insertProject, insertUser }