const express = require('express');

const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

io.on('connection', function(socket){
    console.log('Novo cliente conectado');

    socket.emit('mensagem', 'Bem vindo');
})


server.listen(8080, function(){
   console.log('Rodando na porta 8080');
});