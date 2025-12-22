package com.skillsharing.auth.service.impl;

import com.skillsharing.auth.dto.AuthResponse;
import com.skillsharing.auth.dto.LoginRequest;
import com.skillsharing.auth.security.JwtUtil;
import com.skillsharing.auth.service.AuthService;
import com.skillsharing.user.dto.UserResponse;
import com.skillsharing.user.entity.UserEntity;
import com.skillsharing.user.entity.UserStatus;
import com.skillsharing.user.repository.UserRepository;
import org.springframework.stereotype.Service;

import org.springframework.security.crypto.password.PasswordEncoder;

@Service
public class AuthServiceImpl implements AuthService {

    private final PasswordEncoder passwordEncoder;
    private final UserRepository userRepository;
    private final JwtUtil jwtUtil;

    public AuthServiceImpl(PasswordEncoder passwordEncoder,UserRepository userRepository,JwtUtil jwtUtil) {
        this.passwordEncoder = passwordEncoder;
        this.userRepository = userRepository;
        this.jwtUtil = jwtUtil;
    }

        @Override
        public String encodePassword(String rawPassword) {
            return passwordEncoder.encode(rawPassword);
        }

    @Override
    public AuthResponse login(LoginRequest request) {

        UserEntity user = userRepository.findByEmail(request.getEmail())
                .orElseThrow(() -> new IllegalArgumentException("Invalid credentials"));

        if (!passwordEncoder.matches(request.getPassword(), user.getPassword())) {
            throw new IllegalArgumentException("Invalid credentials / Wrong username or password");
        }
        if (user.getStatus() != UserStatus.ACTIVE) {
            throw new IllegalArgumentException("Account is inactive");
        }

        String token = jwtUtil.generateToken(user.getEmail());

        UserResponse userResponse = new UserResponse();
        userResponse.setId(user.getId());
        userResponse.setEmail(user.getEmail());
        userResponse.setFullName(user.getFullName());

        AuthResponse response = new AuthResponse();
        response.setAccessToken(token);
        response.setUser(userResponse);

        return response;
    }
}