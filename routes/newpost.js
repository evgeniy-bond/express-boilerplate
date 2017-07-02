var express = require('express');
var router = express.Router();

let mongoose = require('../lib/mongoose');
let newsDataSchema = require('../models/newsData');
let NewsData = mongoose.model('newsData', newsDataSchema);

var formidable = require('formidable');
let path = require('path');
let fs = require('fs');

router.post('/', (req, res, next) => {
  let form = new formidable.IncomingForm(),
    post = {};
  form.uploadDir = `upload`;
  form.hash = false;

  form.parse(req);

  form
    .on('field', (field, value) => {
      post[field] = value;
    }).
    on('fileBegin', (name, file) => {
      if (!file.name) return;
      let id = Date.now();
      let mainPath = path.resolve(__dirname, '../upload/');

      fs.mkdirSync(mainPath + `/post_${id}`);
      post.img = file.path = path.resolve(__dirname, `../upload/post_${id}/` + file.name);

    })
    .on('end', () => {

      let data = new NewsData(post);
      data.save();
      data.saved();
      res.json({ "status": "ok" });

    })
    .on('error', err => {
      console.log(err);
     });
 });

 module.exports = router;
