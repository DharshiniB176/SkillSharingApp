package com.skillsharing.user.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;

public record CurrentUserResponse(
        Long id,
        String email,
        String fullName,
        String role
) {
    public static class ReactivateRequest {

        @Email
        @NotBlank
        private String email;

        @NotBlank
        private String password;

        public @Email @NotBlank String getEmail() {
            return email;
        }

        public void setEmail(@Email @NotBlank String email) {
            this.email = email;
        }

        public @NotBlank String getPassword() {
            return password;
        }

        public void setPassword(@NotBlank String password) {
            this.password = password;
        }
    }
}
