package com.example.backend.fanout;

import org.springframework.amqp.core.FanoutExchange;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

@Component
public class FanoutMessageSender {

    private final RabbitTemplate rabbitTemplate;
    private final FanoutExchange fanoutExchange;

    @Autowired
    public FanoutMessageSender(RabbitTemplate rabbitTemplate, FanoutExchange fanoutExchange) {
        this.rabbitTemplate = rabbitTemplate;
        this.fanoutExchange = fanoutExchange;
    }

    // Send a message every 5 seconds
    @Scheduled(fixedRate = 50000000)
    public void sendMessagePeriodically() {
        String message = "Scheduled message: " + System.currentTimeMillis();
        rabbitTemplate.convertAndSend(fanoutExchange.getName(), "", message);
        System.out.println("Sent scheduled message: " + message);
    }

    // Method to send a message on demand
    public void sendMessageOnDemand(String message) {
        rabbitTemplate.convertAndSend(fanoutExchange.getName(), "", message);
        System.out.println("Sent message on demand: " + message);
    }
}
