import io from 'socket.io-client';
const socket = io('http://localhost:3005');

function joinChat(callback, user) {
  socket.emit('join', user);
  socket.on('send message', msg => {
    callback(msg);
  });
}

function sendMessage(callback, user, message) {
  const msg = { user, message };
  socket.emit('send message', msg);
  callback();
}

function userDisconnected(callback) {
  socket.on('user disconnected', user => {
    callback(user);
  });
}
export { joinChat, sendMessage, userDisconnected };
