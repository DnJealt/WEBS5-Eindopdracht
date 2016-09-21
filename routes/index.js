var express = require('express');
var router = express.Router();
var key = require('../modules/apikey');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', msg: key });
});

module.exports = router;
