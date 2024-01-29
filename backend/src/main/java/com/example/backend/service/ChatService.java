package com.example.backend.service;

import com.example.backend.DTO.ChatDTO;
import com.example.backend.model.ChatMessage;
import com.example.backend.model.ChatRoom;
import com.example.backend.model.User;

import java.util.List;

public interface ChatService {

    void sendMessage(User user, ChatMessage message);
    List<String> getAllUserQueues(User user);
    List<ChatDTO> getAllUserChatRooms(User user);
    ChatDTO createChat(User creator, String chatName);
    ChatRoom addUserToChat(ChatRoom chat, User user);
    void removeUserFromChat(User requestingUser, Long chatId, Long userId);
    User addNewUser(User owner, Long chatId, String email);
    ChatRoom checkUserMessage(ChatMessage message, User user);
    void checkChatOwnership(User user, ChatRoom chat);
    void createConsumer(String queue);
    ChatRoom getChat(Long chatId);
}
