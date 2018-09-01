const util = require('../utils/util')

//dummy data
var userInfo = [
  {
    username: "bernard",
    password: "bernard946"
  },
  {
    username: "wendy",
    password: "wendy66666666666666666666666666"
  }
]

const login = async(username, password) => {
	var flag = false
    let dao = util.getDao();
    let resp = await dao.select("select * from user")
    for(var i = 0; i < resp.length; i++){

      let user = resp[i].username;
      let pass = resp[i].password;

      if(username === user && password === pass){
        flag = true;
      }
    }
    return flag
}

const getAllProjects = async() => {
    let dao = util.getDao();
    let resp = await dao.select("select * from project")
    return resp
}

const deleteProject = async(id) => {
    let dao = util.getDao();
    let resp = await dao.select("delete from project where id = " + id)
    return resp
}

const insertProject = async(param) => {
  let dao = util.getDao()
  let resp = await dao.insertProject(param)
  return resp
}

const insertUser = async(param) => {
  let dao = util.getDao()
  let resp = await dao.insertUser(param)
  return resp
}



module.exports = { login, getAllProjects, deleteProject, insertProject, insertUser }