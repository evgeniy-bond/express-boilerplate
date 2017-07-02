let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let adminDataSchema = new Schema({
    login: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
}, {collection: 'AdminData'});


module.exports = adminDataSchema;