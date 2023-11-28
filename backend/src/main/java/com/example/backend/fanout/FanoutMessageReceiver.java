package com.example.backend.fanout;

import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.stereotype.Component;

@Component
public class FanoutMessageReceiver {

    @RabbitListener(queues = RabbitMQFanoutConfig.QUEUE_1)
    public void receiveFromQueue1(String message) {
        System.out.println("Received message from Queue 1: " + message);
    }

    @RabbitListener(queues = RabbitMQFanoutConfig.QUEUE_2)
    public void receiveFromQueue2(String message) {
        System.out.println("Received message from Queue 2: " + message);
    }
}

