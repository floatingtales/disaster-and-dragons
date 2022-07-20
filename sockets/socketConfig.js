const socketConfig = (io) => {
  io.on('connect', (socket) => {
    console.log('heyho you connected');
    socket.on('join', () => {
      console.log('heyho you joined');
    });
  });
};

module.exports = socketConfig;
