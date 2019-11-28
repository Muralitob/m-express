const connection = require('../config/dbServer')

export function findUsers() {
  let sql = ``
  connection.query(sql, (err, result) => {
    if(err) {
      console.log('[query] - :' + err);
    }else {
      return result
    }
  })
}