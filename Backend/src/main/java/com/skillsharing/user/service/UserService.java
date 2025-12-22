package com.skillsharing.user.service;


import com.skillsharing.user.dto.ReactivateRequest;
import com.skillsharing.user.dto.RegisterRequest;
import com.skillsharing.user.dto.UserResponse;
import com.skillsharing.user.entity.UpdatePassword;
import com.skillsharing.user.entity.UpdateUserName;

public interface UserService {

    UserResponse register(RegisterRequest request);

    UserResponse updateCurrentUser(String email, UpdateUserName request);

    void changePassword(String email, UpdatePassword request);

    void deactivateCurrentUser(String email);

    void reactivateAccount(ReactivateRequest request);



}