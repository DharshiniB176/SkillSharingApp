package com.skillsharing.user.controller;

import com.skillsharing.auth.security.CustomUserDetails;
import com.skillsharing.user.dto.*;
import com.skillsharing.user.service.UserService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/users")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping
    public ResponseEntity<UserResponse> register(
            @Valid @RequestBody RegisterRequest request) {

        UserResponse response = userService.register(request);
        return ResponseEntity.status(HttpStatus.CREATED).body(response);
    }

    @GetMapping("/me")
    public CurrentUserResponse getCurrentUser(Authentication authentication) {

        CustomUserDetails userDetails =
                (CustomUserDetails) authentication.getPrincipal();

        return new CurrentUserResponse(
                userDetails.getUser().getId(),
                userDetails.getUser().getEmail(),
                userDetails.getUser().getFullName(),
                userDetails.getUser().getRole().name()
        );
    }


    @PutMapping("/me")
    public ResponseEntity<UserResponse> updateMe(
            @Valid @RequestBody UpdateProfileRequest request,
            Authentication authentication) {

        String email = authentication.getName();
        UserResponse response = userService.updateCurrentUser(email, request);

        return ResponseEntity.ok(response);
    }

    @PutMapping("/me/password")
    public ResponseEntity<?> changePassword(
            @Valid @RequestBody UpdatePasswordRequest request,
            Authentication authentication) {

        String email = authentication.getName();
        userService.changePassword(email, request);

        return ResponseEntity.ok(
                Map.of("message", "Password updated successfully")
        );
    }


    @DeleteMapping("/me")
    public ResponseEntity<?> deactivateMe(Authentication authentication) {

        String email = authentication.getName();
        userService.deactivateCurrentUser(email);

        return ResponseEntity.ok(
                Map.of("message", "Account deactivated successfully")
        );
    }

    @PostMapping("/reactivate")
    public ResponseEntity<?> reactivate(
            @Valid @RequestBody CurrentUserResponse.ReactivateRequest request) {

        userService.reactivateAccount(request);

        return ResponseEntity.ok(
                Map.of("message", "Account reactivated successfully")
        );
    }

}
