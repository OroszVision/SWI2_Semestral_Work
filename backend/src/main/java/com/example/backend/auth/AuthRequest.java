package com.example.backend.auth;

import jakarta.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

@RequiredArgsConstructor
@Getter
@Setter
public class AuthRequest {

    @NotBlank
    private String email;
    @NotBlank
    private String password;
}