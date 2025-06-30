const express = require('express');
const http = require('http');
const WebSocket = require('ws');
const cors = require('cors');
const connectDB = require('./db');
const Message = require('./models/Message');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

connectDB(); // connect to mongodb

wss.on('connection', (socket) => {
    let username = "";

    socket.on('message', async (data) => {
        const parsed = JSON.parse(data);

        if (parsed.type === 'join') {
            username = parsed.username;
            const recent = await Message.find().sort({ timestamp: -1 }).limit(50);
            socket.send(JSON.stringify({ type: 'history', messages: recent.reverse() }));
        }

        if (parsed.type === 'message') {
            const newMsg = new Message({ username, message: parsed.message });
            await newMsg.save();

            const msgToSend = {
                type: 'message',
                username: username,
                message: parsed.message,
            };

            wss.clients.forEach(client => {
                if (client.readyState === WebSocket.OPEN) {
                    client.send(JSON.stringify(msgToSend));
                }
            });
        }
    });

    socket.on('close', () => {
        console.log(`${username} disconnected`);
    });
});
const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

