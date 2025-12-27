package com.skillsharing.skills.controller;

import com.skillsharing.skills.dto.UserSkillRequest;
import com.skillsharing.skills.dto.UserSkillResponse;
import com.skillsharing.skills.service.SkillService;
import com.skillsharing.user.entity.UserEntity;
import com.skillsharing.user.repository.UserRepository;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/user/skills")
public class UserSkillController {

    private final SkillService skillService;
    private final UserRepository userRepository;

    public UserSkillController(
            SkillService skillService,
            UserRepository userRepository
    ) {
        this.skillService = skillService;
        this.userRepository = userRepository;
    }

    @PostMapping
    public ResponseEntity<?> addSkill(
            @Valid @RequestBody UserSkillRequest request,
            Authentication authentication
    ) {

        UserEntity user = userRepository
                .findByEmail(authentication.getName())
                .orElseThrow(() -> new IllegalArgumentException("User not found"));

        skillService.addSkillToUser(user, request);

        return ResponseEntity.ok(
                Map.of("message", "Skill added successfully")
        );
    }

        @GetMapping
        public List<UserSkillResponse> mySkills(Authentication auth) {
            return skillService.getMySkills(auth.getName());
        }

        @DeleteMapping("/{skillId}")
        public ResponseEntity<?> removeSkill(
                @PathVariable Long skillId,
                Authentication auth) {

            skillService.removeSkillFromUser(auth.getName(), skillId);
            return ResponseEntity.ok(Map.of("message", "Skill removed"));
        }
    }

