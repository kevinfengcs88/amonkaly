const io = require('socket.io')(5000, {
    cors: {
        origin: ['http://localhost:3000']
    }
});

io.on('connection', socket => {
    console.log(socket.id);
    socket.on('custom-event', (number, string) => {
        console.log(number, string);
    })
})