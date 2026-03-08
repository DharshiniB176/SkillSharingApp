package com.skillsharing.userskill.controller;

import com.skillsharing.userskill.dto.UserSkillDTO;
import com.skillsharing.userskill.entity.UserSkillEntity;
import com.skillsharing.userskill.service.UserSkillService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/user-skills")
public class UserSkillController {

    private final UserSkillService userSkillService;

    public UserSkillController(UserSkillService userSkillService) {
        this.userSkillService = userSkillService;
    }

    @PostMapping
    public ResponseEntity<UserSkillEntity> addUserSkill(
            @RequestParam Long userId,
            @RequestBody UserSkillDTO dto) {

        UserSkillEntity userSkill = userSkillService.addUserSkill(userId, dto);
        return ResponseEntity.ok(userSkill);
    }

    @GetMapping
    public ResponseEntity<List<UserSkillEntity>> getUserSkills(
            @RequestParam Long userId) {

        List<UserSkillEntity> skills = userSkillService.getUserSkills(userId);
        return ResponseEntity.ok(skills);
    }
}