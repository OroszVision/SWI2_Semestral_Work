package com.example.backend.service;

import com.example.backend.auth.AuthRequest;
import com.example.backend.auth.AuthResponse;
import com.example.backend.auth.RegistrationRequest;
import com.example.backend.model.User;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.io.IOException;

public interface UserService {

    User getUserFromRequest(HttpServletRequest request);
    AuthResponse registerUser(RegistrationRequest request);
    AuthResponse authenticate(AuthRequest request);
    void refreshToken(HttpServletRequest request,
                      HttpServletResponse response) throws IOException;

    User getByEmail(String email);
    User getById(Long id);
}
