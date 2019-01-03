const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const PORT = 3005;

let users = 0;
io.on('connection', socket => {
  console.log(`${socket.id} has connected to server`);

  socket.on('join', user => {
    ++users;
    console.log(`${socket.id} has set name to ${user}`);
    socket.broadcast.emit('new user', {
      description: `${users} users connected`,
      user: user
    }); //emits to everyone but this socket

    socket.on('disconnect', () => {
      console.log(`${socket.id} has disconnected`);

      socket.broadcast.emit('user disconnected', {
        description: `${users} users connected`,
        user: user
      });
    });

    socket.on('send message', msg => {
      console.log('hello');
      console.log(user, 'sent a message ', msg);
      io.emit('send message', msg);
    });
  });
});

http.listen(3005, () => {
  console.log('Socket server is listening to port: ', 3005);
});
