const io = require('socket.io')(5000, {
    cors: {
        origin: ['http://localhost:3000']
    }
});

io.on('connection', socket => {
    socket.on('socket-connection-event', (socketID) => {
        console.log('Socket connection established with ID: ' + socketID);
    });
    socket.on('deck-click-event', (string) => {
        console.log(string);
    });
})