package com.example.backend.DTO;

import com.example.backend.model.ChatRoom;
import lombok.Builder;
import lombok.Data;

import java.util.List;

@Builder
@Data
public class ChatDTO {

    private ChatRoom chat;
    private List<String> queues;
}
