const boardModel = require('../models/boardModel');

const socketConfig = (io) => {
  io.on('connection', (socket) => {
    socket.on('dothing', () => {
      console.log('did thing');
    });

    socket.on('joinBoard', async (boardName) => {
      console.log('joining:', boardName);
      socket.join(boardName);
      const boardData = await boardModel.findOne({ boardName });
      socket.to(boardName).emit('loadBoard', boardData);
    });

    socket.on('saveChat', async (boardName, chatLogs) => {
      console.log('updating chats:', boardName);
      console.log(boardName);
      console.log(chatLogs);
      const update = await boardModel.updateOne({ boardName }, { $set: { chatLogs } });
      console.log(update);
      const boardData = await boardModel.findOne({ boardName });
      socket.to(boardName).emit('loadboard', boardData);
    });
  });
};

module.exports = socketConfig;
