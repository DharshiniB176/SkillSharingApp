package com.skillsharing.interest.controller;

import com.skillsharing.interest.entity.UserInterestEntity;
import com.skillsharing.interest.service.UserInterestService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/interests")
public class UserInterestController {

    private final UserInterestService service;

    public UserInterestController(UserInterestService service) {
        this.service = service;
    }

    @PostMapping
    public void save(
            @RequestParam Long userId,
            @RequestBody List<String> interests) {

        service.saveInterests(userId, interests);
    }

    @GetMapping
    public List<UserInterestEntity> get(
            @RequestParam Long userId) {

        return service.getUserInterests(userId);
    }
}