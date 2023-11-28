package com.example.backend.topic;

import org.springframework.amqp.rabbit.annotation.RabbitListener;

public class MessageConsumer {
    @RabbitListener(queues = "marketingQueue")
    public void handleMarketingMessage(String message) {
        System.out.println("Received marketing message: " + message);
    }

    @RabbitListener(queues = "financeQueue")
    public void handleFinanceMessage(String message) {
        System.out.println("Received finance message: " + message);
    }

    @RabbitListener(queues = "adminQueue")
    public void handleAdminMessage(String message) {
        System.out.println("Received admin message: " + message);
    }

    @RabbitListener(queues = "allQueue")
    public void handleAllMessage(String message) {
        System.out.println("Received all message: " + message);
    }
}
