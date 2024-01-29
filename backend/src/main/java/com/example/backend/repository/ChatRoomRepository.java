package com.example.backend.repository;

import com.example.backend.model.ChatRoom;
import com.example.backend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ChatRoomRepository extends JpaRepository<ChatRoom, Long> {

    List<ChatRoom> findAllByUserQueues_User(User user);
}
