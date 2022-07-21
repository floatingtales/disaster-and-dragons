const socketConfig = (io) => {
  io.on('connect', (socket) => {
    console.log('heyho you connected');
    socket.on('join', () => {
      console.log('heyho you joined');
    });

    socket.on('dothing', () => {
      console.log('did thing');
      socket.broadcast.emit('hello');
    });

    socket.emit('dothing');
  });
};

module.exports = socketConfig;
