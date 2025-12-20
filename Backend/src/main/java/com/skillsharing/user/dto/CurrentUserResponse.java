package com.skillsharing.user.dto;

public record CurrentUserResponse(
        Long id,
        String email,
        String fullName,
        String role
) {}
