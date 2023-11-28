package com.example.backend.topic;

import org.springframework.amqp.core.AmqpTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class ManagerProducer {

    private final AmqpTemplate amqpTemplate;

    @Autowired
    public ManagerProducer(AmqpTemplate amqpTemplate) {
        this.amqpTemplate = amqpTemplate;
    }

    public void sendMessage(String routingKey, String message) {
        amqpTemplate.convertAndSend("topic-exchange", routingKey, message);
        System.out.println("Sent message to topic exchange with routing key: " + routingKey);
    }

}
