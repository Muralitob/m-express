const connection = require('../config/dbServer')

 function findUsers() {
  let sql = ``
  let resultPromise = new Promise(function(resolve, reject) {
    connection.query(sql, (err, result) => {
      if(err) {
        console.log('[query] - :' + err);
      }else {
        return result
      }
    })
  })
  return resultPromise
}

module.exports = {
  findUsers
}