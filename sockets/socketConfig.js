const boardModel = require('../models/boardModel');

const socketConfig = (io) => {
  io.on('connection', (socket) => {
    socket.on('joinBoard', async (boardName) => {
      console.log('joining:', boardName);
      socket.join(boardName);
      const boardData = await boardModel.findOne({ boardName });
      io.in(boardName).emit('loadBoard', boardData);
    });

    socket.on('saveChat', async (boardName, chatLogs) => {
      console.log('updating chats:', boardName);
      const update = await boardModel.updateOne({ boardName }, { $set: { chatLogs } });
      console.log(update);
      const boardData = await boardModel.findOne({ boardName });
      // update everything in client
      io.in(boardName).emit('loadBoard', boardData);
    });

    socket.on('saveChar', async (boardName, characters) => {
      console.log('adding a character:', boardName);
      const update = await boardModel.updateOne({ boardName }, {
        $push: {
          characters,
        },
      });
      console.log(update);
      const boardData = await boardModel.findOne({ boardName });
      io.in(boardName).emit('loadBoard', boardData);
    });
  });
};

module.exports = socketConfig;
