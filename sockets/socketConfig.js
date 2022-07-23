const socketConfig = (io) => {
  io.on('connection', (socket) => {
    socket.on('dothing', () => {
      console.log('did thing');
      socket.broadcast.emit('hello');
    });
  });
};

module.exports = socketConfig;
