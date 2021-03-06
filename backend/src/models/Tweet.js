const mongoose = require('mongoose');

const TweetSchema = new mongoose.Schema({
    autor: String,
    conteudo: String,
    likes: {
        type: Number,
        default: 0
    },
    createdAd: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Tweet', TweetSchema);