package com.skillsharing.user.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
public class RegisterRequest {

        @NotBlank
        @Email
        private String email;

        @NotBlank
        @Size(min = 8, message = "Password must be at least 8 characters")
        private String password;

        @NotBlank
        private String fullName;

        @NotBlank
        @Pattern(regexp = "^[0-9]{10}$", message = "Phone number must be 10 digits")
        private String phoneNumber;

        public @NotBlank @Pattern(regexp = "^[0-9]{10}$", message = "Phone number must be 10 digits") String getPhoneNumber() {
                return phoneNumber;
        }

        public void setPhoneNumber(@NotBlank @Pattern(regexp = "^[0-9]{10}$", message = "Phone number must be 10 digits") String phoneNumber) {
                this.phoneNumber = phoneNumber;
        }

        public @NotBlank @Email String getEmail() {
                return email;
        }

        public void setEmail(@NotBlank @Email String email) {
                this.email = email;
        }

        public @NotBlank @Size(min = 8, message = "Password must be at least 8 characters") String getPassword() {
                return password;
        }

        public void setPassword(@NotBlank @Size(min = 8, message = "Password must be at least 8 characters") String password) {
                this.password = password;
        }

        public @NotBlank String getFullName() {
                return fullName;
        }

        public void setFullName(@NotBlank String fullName) {
                this.fullName = fullName;
        }
}
