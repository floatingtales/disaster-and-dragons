const boardModel = require('../models/boardModel');

const socketConfig = (io) => {
  io.on('connection', (socket) => {
    socket.on('joinBoard', async (boardName) => {
      console.log('joining:', boardName);
      socket.join(boardName);
      console.log(socket.rooms);
      const boardData = await boardModel.findOne({ boardName });
      io.in(boardName).emit('loadBoard', boardData);
    });

    socket.on('saveChat', async (boardName, chatLogs) => {
      console.log('updating chats:', boardName);
      console.log(boardName);
      console.log(chatLogs);
      const update = await boardModel.updateOne({ boardName }, { $set: { chatLogs } });
      console.log(update);
      const boardData = await boardModel.findOne({ boardName });
      io.in(boardName).emit('loadBoard', boardData);
    });
  });
};

module.exports = socketConfig;
