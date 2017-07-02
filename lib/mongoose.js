let mongoose = require('mongoose');
const URI = 'mongodb://localhost:27017/test';

mongoose.connect(URI);

module.exports = mongoose;