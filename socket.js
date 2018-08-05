module.exports  = function (app, io) {
    console.log('Server Socket Initilaised');
    // respond to connection request
    io.on('connection', (socket) => {
        console.log('user connection');

        // respond to the disconnect request
        socket.on('disconnect', function() {
            console.log('user disconnection');
        });

        // responde to getting a new message
        socket.on('add-message', (message) => {

            // broadcast the message to all other users that are subscribed to this socket
            io.emit('message',{type: 'message', text: message})
        });
    });
}
