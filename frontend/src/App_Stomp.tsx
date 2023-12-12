import React from 'react';
import { Client } from '@stomp/stompjs';

const SOCKET_URL = 'ws://localhost:8080/ws-message';

interface AppState {
    messages: string;
}

class AppStomp extends React.Component<{}, AppState> {
    private client: any;

    constructor(props: {}) {
        super(props);
        this.state = {
            messages: 'Your server message here.',
        };

        this.client = new Client({
            brokerURL: SOCKET_URL,
            reconnectDelay: 5000,
            heartbeatIncoming: 4000,
            heartbeatOutgoing: 4000,
            onConnect: this.onConnected,
            onDisconnect: this.onDisconnected,
        });
    }

    componentDidMount() {
        this.client.activate();
    }

    onConnected = () => {
        console.log('Connected!!');
        this.client.subscribe('/topic/message', this.onMessageReceived);
    };

    onDisconnected = () => {
        console.log('Disconnected!!');
    };

    onMessageReceived = (msg: any) => {
        if (msg.body) {
            const jsonBody = JSON.parse(msg.body);
            if (jsonBody.message) {
                this.setState({ messages: jsonBody.message });
            }
        }
    };

    render() {
        return (
            <div>
                <div>{this.state.messages}</div>
            </div>
        );
    }
}

export default AppStomp;
