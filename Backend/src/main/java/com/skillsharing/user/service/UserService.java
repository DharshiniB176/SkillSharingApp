package com.skillsharing.user.service;



import com.skillsharing.user.dto.*;

public interface UserService {

    UserResponse register(RegisterRequest request);

    UserResponse updateCurrentUser(String email, UpdateProfileRequest request);

    void changePassword(String email, UpdatePasswordRequest request);

    void deactivateCurrentUser(String email);

    void reactivateAccount(CurrentUserResponse.ReactivateRequest request);



}