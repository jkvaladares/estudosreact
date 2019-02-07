const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

const server = require('http').Server(app);
const io = require('socket.io')(server);

mongoose.connect('mongodb://admin:admin123@ds225205.mlab.com:25205/banco_tweet', {
    useNewUrlParser: true
});

app.use((req,res, next) => {
    req.io = io;
return next();
})
app.use(cors());
app.use(express.json());
app.use(require('./routes'));

server.listen(3000, () => {
  console.log("Servidor conectado na porta 3000");
});
