import io from 'socket.io';
const socket = io('http://localhost:3005');

function joinChat(callback, user) {
  socket.emit('join', user);
}

export { joinChat };
