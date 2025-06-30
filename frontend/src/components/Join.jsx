import { useState } from "react";

function Join({ setUsername, setSocket }) {
    const [nameInput, setNameInput] = useState('');

    const handleJoin = () => {
        if (nameInput.trim() === '') return;

        const ws = new WebSocket('ws://localhost:5000');
        ws.onopen = () => {
            ws.send(JSON.stringify({ type: 'join', username: nameInput }));
            setUsername(nameInput);
            setSocket(ws);
        };
    };

    return (
        <div className="h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-96">
                <h2 className="text-2xl font-bold mb-4 text-center">Join Chat</h2>
                <input
                    type="text"
                    placeholder="Enter your name"
                    value={nameInput}
                    onChange={e => setNameInput(e.target.value)}
                    className="w-full p-2 border rounded mb-4"
                />
                <button
                    onClick={handleJoin}
                    className="w-full cursor-pointer bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
                >
                    Join
                </button>
            </div>
        </div>
    );
}

export default Join;
