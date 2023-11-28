package com.example.backend.fanout;

import org.springframework.amqp.core.Binding;
import org.springframework.amqp.core.BindingBuilder;
import org.springframework.amqp.core.FanoutExchange;
import org.springframework.amqp.core.Queue;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class RabbitMQFanoutConfig {


    public static final String FANOUT_EXCHANGE_NAME = "fanout.exchange";
    public static final String QUEUE_1 = "queue1";
    public static final String QUEUE_2 = "queue2";

    @Bean
    public FanoutExchange fanoutExchange() {
        return new FanoutExchange(FANOUT_EXCHANGE_NAME);
    }

    @Bean
    public Queue queue1() {
        return new Queue(QUEUE_1);
    }

    @Bean
    public Queue queue2() {
        return new Queue(QUEUE_2);
    }

    @Bean
    public Binding binding1(FanoutExchange fanoutExchange, Queue queue1) {
        return BindingBuilder.bind(queue1).to(fanoutExchange);
    }

    @Bean
    public Binding binding2(FanoutExchange fanoutExchange, Queue queue2) {
        return BindingBuilder.bind(queue2).to(fanoutExchange);
    }
}
