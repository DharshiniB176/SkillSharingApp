package com.skillsharing.user.service.impl;

import com.skillsharing.auth.service.AuthService;
import com.skillsharing.user.dto.RegisterRequest;
import com.skillsharing.user.dto.UserResponse;
import com.skillsharing.user.entity.UserEntity;
import com.skillsharing.user.entity.UserRole;
import com.skillsharing.user.entity.UserStatus;
import com.skillsharing.user.repository.UserRepository;
import com.skillsharing.user.service.UserService;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;
    private final AuthService authService;

    public UserServiceImpl(UserRepository userRepository,
                           AuthService authService) {
        this.userRepository = userRepository;
        this.authService = authService;
    }

    @Override
    public UserResponse register(RegisterRequest request) {

        if (userRepository.existsByEmail(request.getEmail())) {
            throw new IllegalArgumentException("Email already registered");
        }

        UserEntity user = new UserEntity();
        user.setEmail(request.getEmail());
        user.setPassword(authService.encodePassword(request.getPassword()));
        user.setFullName(request.getFullName());
        user.setRole(UserRole.USER);
        user.setStatus(UserStatus.ACTIVE);

        UserEntity saved = userRepository.save(user);

        UserResponse response = new UserResponse();
        response.setId(saved.getId());
        response.setEmail(saved.getEmail());
        response.setFullName(saved.getFullName());

        return response;
    }
}
