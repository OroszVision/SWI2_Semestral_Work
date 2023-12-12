// App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import SockJsClient from 'react-stomp';
import Chat from "./pages/chats/Chat";
import Group_Chat from "./pages/chats/Group_Chat";
import Profile from "./pages/profile/Profile";
import Login from "./auth/Login";
import PasswordReset from "./auth/PasswordReset";
import Register from "./auth/Register";
import NavigationBar from "./pages/navigation/NavigationBar";
import Home from "./pages/home/Home"; // Import the NavigationBar component

const SOCKET_URL = 'http://localhost:8080/ws-message';

interface Message {
    message: string;
}
const App: React.FC = () => {
    return (
        <Router>
            <>
                {/* Conditionally render NavigationBar based on the route */}
                <Routes>
                    <Route path="/login/*" element={<></>} />
                    <Route path="/register/*" element={<></>} />
                    <Route path="*" element={<NavigationBar />} />
                </Routes>

                <SockJsClient
                    url={SOCKET_URL}
                    topics={['/topic/message']}
                    onConnect={() => console.log('Connected!!')}
                    onDisconnect={() => console.log('Disconnected!')}
                    onMessage={(msg: Message) => console.log(msg.message)}
                    debug={false}
                />

                <Container>
                    <Routes>
                        <Route path="/home" element={<Home />} />
                        <Route path="/chat" element={<Chat />} />
                        <Route path="/group_chat" element={<Group_Chat />} />
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/login/*" element={<Login />} />
                        <Route path="/password-reset" element={<PasswordReset />} />
                        <Route path="/register/*" element={<Register />} />
                        <Route path="*" element={<h2>Page not found!</h2>} />
                    </Routes>
                </Container>
            </>
        </Router>
    );
};

export default App;
