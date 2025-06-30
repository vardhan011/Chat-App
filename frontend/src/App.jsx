import { useState } from 'react';
import Join from './components/Join';
import Chat from './components/Chat';

function App() {
  const [username, setUsername] = useState('');
  const [socket, setSocket] = useState(null);

  return (
    <div
      className="h-screen w-screen flex items-center justify-center bg-no-repeat bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?auto=format&fit=crop&w=1920&q=80')",
      }}
    >
      <div className="w-[92%] sm:w-[420px] bg-white/80 backdrop-blur-xl shadow-2xl rounded-2xl px-6 py-8">
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-800 drop-shadow-sm tracking-wide">
          Real-Time Chat
        </h1>

        {!socket ? (
          <Join setUsername={setUsername} setSocket={setSocket} />
        ) : (
          <Chat username={username} socket={socket} />
        )}
      </div>
    </div>
  );
}

export default App;
