import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TextInput, Button, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Client } from '@stomp/stompjs';
import { DisplayedMessage } from '../interface/DisplayedMessage';
import AsyncStorage from '@react-native-async-storage/async-storage';


const ChatScreen: React.FC<ChatScreenProps> = ({ route }) => {
  const { selectedChat } = route.params;
  const [message, setMessage] = useState<string>('');
  const [messages, setMessages] = useState<DisplayedMessage[]>([]);
  const navigation = useNavigation();
  const stompClient = useRef<Client | null>(null);

  const webSocketConfig = {
    webSocketUrl: 'http://10.0.1.13:8080/ws-message', // Change URL according to your backend
    stompHeaders: {},
    topics: [`/topic/chat/${selectedChat.chat.chatId}`],
  };

  useEffect(() => {
    const initializeStompClient = () => {
      stompClient.current = new Client({
        webSocketFactory: () => new WebSocket(webSocketConfig.webSocketUrl),
        connectHeaders: {},
        debug: function (str) {
          console.log(str);
        },
        reconnectDelay: 5000,
        heartbeatIncoming: 4000,
        heartbeatOutgoing: 4000,
      });
  
      stompClient.current.onConnect = () => {
        console.log('StompJS connected');
        stompClient.current?.subscribe(`/topic/chat/${selectedChat.chat.chatId}`, onMessageReceived);
      };
  
      stompClient.current.onWebSocketClose = () => {
        console.log('StompJS closed');
      };
  
      stompClient.current.activate();
    };
  
    if (selectedChat && stompClient.current === null) {
      initializeStompClient();
    } else if (stompClient.current && !stompClient.current.connected) {
      initializeStompClient();
    }
  
    return () => {
      if (stompClient.current && stompClient.current.connected) {
        stompClient.current.deactivate();
      }
    };
  }, [selectedChat]);
  
  
  
  

  const onMessageReceived = (message) => {
    const receivedMessage: DisplayedMessage = JSON.parse(message.body);
    setMessages((prevMessages) => [...prevMessages, receivedMessage]);
  };

const handleSend = async () => {
  if (message.trim() !== '' && selectedChat && selectedChat.chat) {
    const newMessage: DisplayedMessage = {
      sender: selectedChat.chat.owner,
      content: message,
      type: 'Text',
    };

    setMessages((prevMessages) => [...prevMessages, newMessage]);

    try {
      if (stompClient.current && stompClient.current.connected) {
        stompClient.current.send(`/app/chat/${selectedChat.chat.chatId}`, {}, JSON.stringify(newMessage));
      } else {
        console.error('StompJS client not connected. Sending message through HTTP.');

        // Retrieve access token from AsyncStorage
        const token = await AsyncStorage.getItem("access_token");

        if (token) {
          const response = await fetch("http://10.0.1.13:8080/api/chat/send", {
        method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${token}`,
  },
  body: JSON.stringify({
    type: 'Text',
    chatId: selectedChat.chat.id,
    content: message,
    senderId: selectedChat.chat.owner.id
  }),
});

console.log('HTTP Response:', response);

          if (response.ok) {
            console.log('Message sent successfully through HTTP');
          } else {
            console.error('Message sending failed through HTTP:', response.statusText);
          }
        } else {
          console.error('Access token not found.');
        }
      }
    } catch (error) {
      console.error('Error sending message:', error);
    }

    setMessage('');
  }
};

  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1, maxHeight: 300 }}>
        {messages.map((msg, index) => (
          <View key={index} style={{ marginBottom: 10 }}>
            <Text>{msg.sender.firstName}: {msg.content}</Text>
          </View>
        ))}
      </ScrollView>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, paddingHorizontal: 10 }}
        placeholder="Type a message..."
        value={message}
        onChangeText={(text) => setMessage(text)}
      />
      <Button title="Send" onPress={handleSend} />
    </View>
  );
};

export default ChatScreen;
