package com.skillsharing.user.entity;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public class UpdatePassword {
        @NotBlank
        private String currentPassword;

        @NotBlank
        @Size(min = 8, message = "Password must be at least 8 characters")
        private String newPassword;

    public @NotBlank String getCurrentPassword() {
        return currentPassword;
    }

    public void setCurrentPassword(@NotBlank String currentPassword) {
        this.currentPassword = currentPassword;
    }

    public @NotBlank @Size(min = 8, message = "Password must be at least 8 characters") String getNewPassword() {
        return newPassword;
    }

    public void setNewPassword(@NotBlank @Size(min = 8, message = "Password must be at least 8 characters") String newPassword) {
        this.newPassword = newPassword;
    }
}
