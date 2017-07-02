var express = require('express');
var router = express.Router();

let mongoose = require('../lib/mongoose');
let adminDataSchema = require('../models/adminData');
let AdminData = mongoose.model('AdminData', adminDataSchema);

router.get('/', function (req, res, next) {
  res.render('admin', { title: 'Login please' });
});

router.get('/newpost', function (req, res, next) {
  res.render('newpost', { title: 'Админ, добавь новость' });
});

router.post('/', (req, res, next) => {

  let admin = {
    login: req.body.login,
    password: req.body.password
  };

  AdminData.findOne({login: admin.login})
      .then( user => {
        user.password === admin.password 
        ? res.redirect('/admin/newpost') 
        : res.render('admin', { title: 'You are not admin, try again' });
      })
      .catch(err => console.log(err));
})



module.exports = router;
