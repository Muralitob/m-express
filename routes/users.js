var express = require('express');
var router = express.Router();
const userCtrol = require('../controllers/users')
/* GET users listing. */
router.get('/', function(req, res, next) {
  
  res.send('respond with a resource');
});

module.exports = router;
