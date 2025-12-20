package com.skillsharing.user.service;


import com.skillsharing.user.dto.RegisterRequest;
import com.skillsharing.user.dto.UserResponse;

public interface UserService {

    UserResponse register(RegisterRequest request);
}