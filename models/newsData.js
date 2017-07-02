let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let newsDataSchema = new Schema({
    author: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    img: {
        type: String,
    },
    date: {
        type: Date, 
        default: Date.now
    }
}, {collection: 'newsData'});

newsDataSchema.methods.saved = () => {
    console.log('post saved');
}

module.exports = newsDataSchema;