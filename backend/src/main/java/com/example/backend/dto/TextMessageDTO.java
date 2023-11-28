package com.example.backend.dto;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class TextMessageDTO {

    private String message;
    private String sender;

}