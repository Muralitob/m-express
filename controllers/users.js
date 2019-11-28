const usersModel = require('../models/usersmodel')


export async function findUsers () {
  let result = await usersModel.findUsers
  return result
}
