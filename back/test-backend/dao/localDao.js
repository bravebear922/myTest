const bernardDao = require('./BernardDao')
// const dbConfig = require('../config/dbConfig')
const { local: dbConfig } = require('../conf/config')
const constant = require('../conf/const')
var Promise = require('bluebird');
// require('asyncjs');
var knex;

var local = class localDao extends bernardDao {
	constructor() {
		super()
		knex = require('knex')(dbConfig);
		console.log("knex: " + this.knex);
	}

	async select(sql) {
		var resp = await this.knex.raw(sql)
		return resp[0]
	}

	async getUsers(user) {
		let { id } = user
		var resp = await this.knex.raw(constant.SQL.mysql.GET_USERS, [id])
		return resp[0]
	}

	async getMasterData(master) {
		let { dcNumber, svwNumber } = master
		var resp = await this.knex.raw(constant.SQL.mysql.GET_MASTERS, [dcNumber, svwNumber])
		return resp[0]
	}

	async transactionTest() {
		var rows = [
			{
				id: "cc",
				name: "ccccccccc"
			},
			{
				id: "dd",
				name: "ddddd"
			}
		]

		let chunkSize = 50;
		this.knex.transaction(trx => {
			// this.knex.raw("insert into bernardpte.test_table (id, name) values (?,?), (?,?)", ["cc","ccccccc", "dd", "ddddd"])
			return this.knex.batchInsert("bernardpte.test_table", rows, chunkSize)
			.transacting(trx)
			.then(result => {
				console.log(result)
				return this.knex.raw("insert into bernardpte.reading_material (passage_title, passage_content) values (?,?)", ["aaaa", "bbbb"])
				.transacting(trx);
			}).then(res => {
				return trx.commit();
				console.log(res);
			}).catch(err => {
				console.error(err);
				return trx.rollback();
			})
		}).then(res => {
			console.log("transaction res:" + res)
		}).catch(err => {
			console.log(err);
		})
	}
}

module.exports = local;