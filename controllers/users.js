const usersModel = require('../models/usersmodel')


async function findUsers () {
  let result = await usersModel.findUsers
  return result
}



module.exports = {
  findUsers
}