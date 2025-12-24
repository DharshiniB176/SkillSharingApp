package com.skillsharing.user.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;

public class UpdatePasswordRequest {

    @NotBlank
    private String currentPassword;

    @NotBlank
    @Pattern(
            regexp = "^(?=.*[A-Z])(?=.*[@$!%*?&]).{8,}$",
            message = "Password must have at least 8 characters, 1 uppercase, and 1 special character"
    )
    private String newPassword;

    public String getCurrentPassword() {
        return currentPassword;
    }

    public void setCurrentPassword(String currentPassword) {
        this.currentPassword = currentPassword;
    }

    public String getNewPassword() {
        return newPassword;
    }

    public void setNewPassword(String newPassword) {
        this.newPassword = newPassword;
    }
}
