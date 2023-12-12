import React, { useState } from 'react';
import SockJsClient from 'react-stomp';

const SOCKET_URL = 'http://localhost:8080/ws-message';

interface Message {
  message: string;
}

const App: React.FC = () => {
  const [message, setMessage] = useState<string>('Your server message here.');

  const onConnected = () => {
    console.log('Connected!!');
  };

  const onMessageReceived = (msg: Message) => {
    setMessage(msg.message);
  };

  return (
      <div>
        <SockJsClient
            url={SOCKET_URL}
            topics={['/topic/message']}
            onConnect={onConnected}
            onDisconnect={() => console.log('Disconnected!')}
            onMessage={(msg: Message) => onMessageReceived(msg)}
            debug={false}
        />
        <div>{message}</div>
      </div>
  );
};

export default App;
