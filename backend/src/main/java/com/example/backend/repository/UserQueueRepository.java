package com.example.backend.repository;

import com.example.backend.model.User;
import com.example.backend.model.UserQueue;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserQueueRepository extends JpaRepository<UserQueue, Long> {

    @Query("SELECT uq.queue FROM UserQueue uq WHERE uq.user = :user")
    List<String> findQueuesByUser(@Param("user") User user);
}
