package com.skillsharing.auth.dto;

import com.skillsharing.user.dto.UserResponse;

public class AuthResponse {

    private String accessToken;
    private UserResponse user;

    public String getAccessToken() {
        return accessToken;
    }

    public void setAccessToken(String accessToken) {
        this.accessToken = accessToken;
    }

    public UserResponse getUser() {
        return user;
    }

    public void setUser(UserResponse user) {
        this.user = user;
    }
}