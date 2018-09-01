var dao = require('../dao/mysqlDao')
const constant = require('../conf/const')

// 定义一个用于缓存对象的map对象
var cacheMap = new Map()

const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

// 给外部使用的获取缓存对象的方法
const getObjFromCache = key => {
	if(cacheMap.has(key)){
		return cacheMap.get(key)
	}else{
		return undefined
	}
}
// 给外部使用的添加对象到缓存中的方法
const addToCache = (key, obj) => {
	cacheMap.set(key, obj)
}

// 获取dao对象的方法
const getDao = () => {
	let objDao = getObjFromCache(constant.DAO_OBJ)
	if(objDao == undefined) {
		console.log("第一次需要创建dao对象")
		objDao = new dao()
		addToCache(constant.DAO_OBJ, objDao)
	}
	return objDao
}

module.exports = { formatTime, getObjFromCache, addToCache, getDao }