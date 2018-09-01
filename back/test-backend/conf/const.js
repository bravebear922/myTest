// 这里存放所有的常量 不能被更改的内容 因此这里用到了Object.freeze来使得它的内容不可变
module.exports = Object.freeze({
	DAO_OBJ: "dao",
	INTERNAL_SERVER_ERR: "500错误，服务器挂掉啦",
	PAGE_NOT_FOUND: "你的页面在地球上找不到，请尝试去火星看看!",
	SQL: {
		"mysql": {
			"GET_USERS": `SELECT * from cititest.user where id = ?`,
		},
		"sqlserver": {
			"GET_USERS": "SELECT * from cititest.user"
		}
	}
});