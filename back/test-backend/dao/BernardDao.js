// const dbConfig = require('../config/dbConfig')
// {}里冒号前的部分为config中json字符串的key 冒号后面的是使用的地方用什么变量名去使用它
// 当然如果直接写成 const { mysql } = require('../config/config') 也可以 那下面调用的地方就用mysql作为变量名去使用
const { mysql: dbConfig } = require('../conf/config')
require('asyncjs');
var knex = require('knex')(dbConfig);

var bernard = class BernardDao {
	
	constructor() {
		console.log("initialization")
		this.knex = knex;
		console.log(dbConfig);
	}

	sayHello(name) {
		console.log(`Hello: ${name}`)
	}

	static greet() {
		console.log("hello there")
	}

	async select(sql) {
		var resp = await knex.raw(sql)
		return resp[0]
	}
}

module.exports = bernard