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
      console.log(chatLogs);
      const boardData = await boardModel.findOneAndUpdate({ boardName }, { $set: { chatLogs } }, { returnDocument: 'after' });
      console.log(boardData);
      io.in(boardName).emit('loadChat', boardData);
    });

    socket.on('saveChar', async (boardName, characters) => {
      console.log('adding a character:', boardName);
      const boardData = await boardModel.findOneAndUpdate({ boardName }, {
        $push: {
          characters,
        },
      }, { returnDocument: 'after' });
      console.log(boardData);
      io.in(boardName).emit('loadChar', boardData);
    });

    socket.on('deleteChar', async (boardName, characters) => {
      console.log('deleting a character');
      const boardData = await boardModel.findOneAndUpdate({ boardName }, {
        $set: {
          characters,
        },
      }, { returnDocument: 'after' });
      console.log(boardData);
      io.in(boardName).emit('loadChar', boardData);
    });

    socket.on('updateChar', async (boardName, characters) => {
      console.log('updating characters');
      const boardData = await boardModel.findOneAndUpdate({ boardName }, {
        $set: {
          characters,
        },
      }, { returnDocument: 'after' });
      console.log(boardData);
      io.in(boardName).emit('loadChar', boardData);
    });
  });
};

module.exports = socketConfig;
