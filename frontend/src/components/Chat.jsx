import { useState, useEffect, useRef } from 'react';

function Chat({ username, socket }) {
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const bottomRef = useRef();

    useEffect(() => {
        socket.onmessage = (event) => {
            const data = JSON.parse(event.data);

            if (data.type === 'history') {
                setMessages(data.messages);
            }

            if (data.type === 'message') {
                setMessages(prev => [...prev, {
                    username: data.username,
                    message: data.message,
                }]);
            }
        };
    }, [socket]);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    const sendMessage = () => {
        if (!message.trim()) return;

        socket.send(JSON.stringify({ type: 'message', message }));
        setMessage('');
    };

    return (
        <div className="flex flex-col h-full">
            <div className="mb-4 text-center">
                <h2 className="text-xl font-semibold text-gray-800">
                    Welcome, {username} 👋
                </h2>
            </div>

            <div className="flex-1 overflow-y-auto border border-gray-300 rounded-lg p-4 bg-white/70 backdrop-blur-sm mb-4 shadow-inner max-h-[300px]">
                {messages.map((msg, index) => (
                    <div
                        key={index}
                        className={`mb-3 ${msg.username === username ? 'text-right' : 'text-left'
                            }`}
                    >
                        <div className="inline-block max-w-[80%]">
                            <span className="block text-sm font-semibold text-blue-700">
                                {msg.username}
                            </span>
                            <span className="inline-block bg-gray-100 rounded px-3 py-2 mt-1 text-sm text-gray-800 break-words max-w-full">
                                {msg.message}
                            </span>
                        </div>
                    </div>
                ))}
                <div ref={bottomRef} />
            </div>

            <div className="flex gap-2">
                <input
                    type="text"
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                    placeholder="Type your message..."
                    className="flex-1 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                    onClick={sendMessage}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium transition cursor-pointer"
                >
                    Send
                </button>
            </div>
        </div>
    );
}

export default Chat;
