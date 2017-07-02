var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('admin', { title: 'Login please' });
});

router.get('/newpost', function (req, res, next) {
  res.render('newpost', { title: 'Админ, добавь новость' });
});



module.exports = router;
