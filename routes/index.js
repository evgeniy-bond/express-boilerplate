var express = require('express');
var router = express.Router();

let mongoose = require('../lib/mongoose');
let newsDataSchema = require('../models/newsData');
let newsData = mongoose.model('post-data', newsDataSchema);

router.get('/', function (req, res, next) {
  newsData.find()
        .then(doc => {
            res.render('index', {title: 'Posts', posts: doc});
        });
});

module.exports = router;
