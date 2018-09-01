const bernardDao = require('./BernardDao')
// const dbConfig = require('../config/dbConfig')
const { sqlserver: dbConfig } = require('../conf/config')
const constant = require('../conf/const')
// require('asyncjs');
// var knex;

var sqlserver = class sqlserverDao extends bernardDao {
	constructor() {
		super()
		// 由于父类bernardDao默认使用的是mysql的配置 所以这里要重新使用sqlserver的配置信息覆盖掉
		this.knex = require('knex')(dbConfig);
		console.log("knex: " + this.knex);
	}

	async select(sql) {
		var resp = await this.knex.raw(sql)
		return resp[0]
	}

	async getUsers() {
		var resp = await this.knex.raw(constant.SQL.sqlserver.GET_USERS)
		return resp[0]
	}
}

module.exports = sqlserver;