const express = require('express');
const socket_io = require('socket.io');
const http = require('http');
const config = require('config');
const app = express();
const server = http.createServer(app);

const io = socket_io(server, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
  },
});
const PORT = config.get('PORT');

io.on('connection', (socket) => {
  console.log(`User has been connected ${socket.id}`);

  socket.on('JOIN:ROOM', (data) => {
    console.log(data);
  });

  socket.on('disconnect', () => {
    console.log(`User has been disconnected ${socket.id}`);
  });
});

server.listen(PORT, () => {
  console.log(`Server has been started on http://localhost:${PORT}`);
});
