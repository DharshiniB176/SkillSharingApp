package com.skillsharing.user.service.impl;

import com.skillsharing.auth.service.AuthService;
import com.skillsharing.user.dto.*;
import com.skillsharing.user.entity.*;
import com.skillsharing.user.repository.UserRepository;
import com.skillsharing.user.service.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

@Service
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;
    private final AuthService authService;
    private final PasswordEncoder passwordEncoder;

    public UserServiceImpl(UserRepository userRepository,
                           AuthService authService,
                           PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.authService = authService;
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    public UserResponse register(RegisterRequest request) {

        if (userRepository.existsByEmail(request.getEmail())) {
            throw new IllegalArgumentException("Email already registered");
        }

        if (userRepository.existsByPhoneNumber(request.getPhoneNumber())) {
            throw new IllegalArgumentException("Phone number already registered");
        }

        UserEntity user = new UserEntity();
        user.setEmail(request.getEmail());
        user.setPhoneNumber(request.getPhoneNumber());
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

    @Override
    public UserResponse updateCurrentUser(String email, UpdateProfileRequest request) {

        UserEntity user = userRepository.findByEmail(email)
                .orElseThrow(() ->
                        new ResponseStatusException(
                                HttpStatus.NOT_FOUND, "User not found"));

        user.setFullName(request.getFullName());

        UserEntity savedUser = userRepository.save(user);

        return mapToResponse(savedUser);
    }
    private UserResponse mapToResponse(UserEntity user) {
        UserResponse response = new UserResponse();
        response.setId(user.getId());
        response.setEmail(user.getEmail());
        response.setFullName(user.getFullName());
        return response;
    }


    @Override
    public void changePassword(String email, UpdatePasswordRequest request) {

        UserEntity user = userRepository.findByEmail(email)
                .orElseThrow(() ->
                        new ResponseStatusException(
                                HttpStatus.NOT_FOUND, "User not found"));

        if (!passwordEncoder.matches(
                request.getCurrentPassword(),
                user.getPassword())) {

            throw new ResponseStatusException(
                    HttpStatus.BAD_REQUEST,
                    "Current password is incorrect");
        }

        user.setPassword(
                passwordEncoder.encode(request.getNewPassword())
        );

        userRepository.save(user);
    }

    @Override
    public void deactivateCurrentUser(String email) {

        UserEntity user = userRepository.findByEmail(email)
                .orElseThrow(() -> new IllegalArgumentException("User not found"));

        user.setStatus(UserStatus.INACTIVE);

        userRepository.save(user);
    }

    @Override
    public void reactivateAccount(CurrentUserResponse.ReactivateRequest request) {

        UserEntity user = userRepository.findByEmail(request.getEmail())
                .orElseThrow(() -> new IllegalArgumentException("User not found"));

        if (!passwordEncoder.matches(
                request.getPassword(),
                user.getPassword())) {
            throw new IllegalArgumentException("Invalid credentials");
        }

        if (user.getStatus() == UserStatus.ACTIVE) {
            throw new IllegalArgumentException("Account already active");
        }

        user.setStatus(UserStatus.ACTIVE);
        userRepository.save(user);
    }

}
