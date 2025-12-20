package com.skillsharing.auth.service;

import com.skillsharing.auth.dto.AuthResponse;
import com.skillsharing.auth.dto.LoginRequest;

public interface AuthService {

    String encodePassword(String rawPassword);

    AuthResponse login(LoginRequest request);
}

