import React, { useEffect, useState, useContext } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  TextInput,
  ScrollView,
  StyleSheet,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthContext } from '../auth/AuthContext';
import { ChatObject } from '../interface/ChatObject';
import { useNavigation, NavigationProp, RouteProp } from '@react-navigation/native'; 

type RootStackParamList = {
    ChatScreen: undefined;
    MainPage: undefined;
  };
  
  type MainPageScreenNavigationProp = NavigationProp<RootStackParamList, 'MainPage'>;
  type MainPageScreenRouteProp = RouteProp<RootStackParamList, 'MainPage'>;
  


const MainPage: React.FC = () => {
  const { setAuthenticated } = useContext(AuthContext);
  const [chats, setChats] = useState<ChatObject[]>([]);
  const [showCreateChatModal, setShowCreateChatModal] = useState(false);
  const [newChatName, setNewChatName] = useState('');
  const [selectedChat, setSelectedChat] = useState<ChatObject | null>(null);
  const navigation = useNavigation<MainPageScreenNavigationProp>();

  useEffect(() => {
    fetchUserChats();
  }, []);

  const fetchUserChats = async () => {
    const token = await getAccessTokenFromLocalStorage();
    if (token === null) return;

    try {
      const response = await fetch(`http://10.0.1.13:8080/api/chat/exchanges`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Chats from user: ', data);
        setChats(data);
      } else {
        console.error('Failed to fetch chats:', response.statusText);
      }
    } catch (error) {
      console.error('Error fetching chats:', error);
    }
  };

  const handleCreateChatSubmit = async () => {
    try {
      const token = await getAccessTokenFromLocalStorage();
      if (!token) return;

      const response = await fetch(`http://10.0.1.13:8080/api/chat/create?chatName=${newChatName}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const msg = 'Created chat: ' + newChatName;
        console.log(msg);
        // Close the create chat modal
        setShowCreateChatModal(false);
        // Clear the new chat name
        setNewChatName('');
        // Refresh the chat list after creating a new chat
        fetchUserChats();
      } else {
        const msg = "Cannot create chat: " + newChatName;
        console.error(msg, response.statusText);
        // Handle error (e.g., show an error message)
      }
    } catch (error) {
      console.error('Chat creation failed:', error);
      // Handle error (e.g., show an error message)
    }
  };

  const getAccessTokenFromLocalStorage = async (): Promise<string | null> => {
    try {
      const token = await AsyncStorage.getItem('access_token');
      if (!token) {
        console.log('No access token found');
        return null;
      }
      return token;
    } catch (error) {
      console.error('Error getting access token from AsyncStorage:', error);
      return null;
    }
  };
  const openChat = (c: ChatObject) => {
    // Update the 'seen' property and set the selected chat
    setSelectedChat((prevChat) => {
      if (prevChat) {
        // Mark the previously selected chat as not seen
        prevChat.seen = false;
      }
  
      // Mark the current chat as seen
      c.seen = true;
  
      return c;
    });
  
    // Navigate to ChatScreen and pass the selected chat as a parameter
    navigation.navigate('ChatScreen', { selectedChat: c });
  };
  

  const renderChatButton = (c: ChatObject) => {
    let displayedMessage = '';

    if (c.messages && c.messages.length > 0) {
      const message = c.messages[c.messages.length - 1];

      if (message.type === 'Text') {
        displayedMessage = `${message.sender.firstName}: ${message.content}`;
      } else {
        displayedMessage = message.content;
      }

      if (displayedMessage.length > 15) {
        displayedMessage = displayedMessage.substring(0, 15) + '...';
      }
    }

    return (
      <TouchableOpacity
        onPress={() => openChat(c)}
        style={[styles.button, { backgroundColor: 'black' }]}
        key={c.chat.exchange}
      >
        <View style={styles.buttonContent}>
          <Text style={styles.chatName}>{c.chat.chatName}</Text>
          <Text style={c.seen ? styles.message : [styles.message, styles.bold]}>
            {displayedMessage}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      {/* Button to open the create chat modal */}
      <TouchableOpacity
        style={styles.createButton}
        onPress={() => setShowCreateChatModal(true)}
      >
        <Text style={styles.createButtonText}>Create New Chat</Text>
      </TouchableOpacity>

      {/* Display your chat rooms using ChatRoomComponent */}
      <ScrollView style={styles.scrollView}>
        {chats.map((chat) => renderChatButton(chat))}
      </ScrollView>

      {/* Modal for creating a new chat */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={showCreateChatModal}
        onRequestClose={() => setShowCreateChatModal(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text>Create New Chat</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter chat name"
              value={newChatName}
              onChangeText={(text) => setNewChatName(text)}
            />
            <TouchableOpacity style={styles.createChatButton} onPress={handleCreateChatSubmit}>
              <Text style={styles.createChatButtonText}>Create</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.cancelButton}
              onPress={() => setShowCreateChatModal(false)}
            >
              <Text style={styles.cancelButtonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  createButton: {
    marginTop: 16,
    marginBottom: 16,
    padding: 10,
    backgroundColor: 'blue',
    borderRadius: 5,
  },
  createButtonText: {
    color: 'white',
    fontSize: 18,
  },
  scrollView: {
    width: '100%',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '80%',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingLeft: 8,
  },
  button: {
    width: '100%',
    marginVertical: 5,
    padding: 10,
  },
  buttonContent: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  chatName: {
    fontSize: 18,
    color: 'white',
  },
  message: {
    fontSize: 14,
    color: 'white',
  },
  bold: {
    fontWeight: 'bold',
  },
  createChatButton: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
    marginVertical: 8,
  },
  createChatButtonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
  cancelButton: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
    marginVertical: 8,
  },
  cancelButtonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default MainPage;
