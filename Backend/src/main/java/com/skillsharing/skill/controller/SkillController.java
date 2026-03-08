package com.skillsharing.skill.controller;

import com.skillsharing.skill.dto.SkillDTO;
import com.skillsharing.userskill.dto.UserSkillDTO;
import com.skillsharing.skill.entity.SkillEntity;
import com.skillsharing.userskill.entity.UserSkillEntity;
import com.skillsharing.skill.service.SkillService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/skills")
public class SkillController {

    private final SkillService skillService;

    public SkillController(SkillService skillService) {
        this.skillService = skillService;
    }

    @PostMapping
    public ResponseEntity<SkillEntity> createSkill(@RequestBody SkillDTO dto) {
        SkillEntity skill = skillService.createSkill(dto);
        return ResponseEntity.ok(skill);
    }

    @GetMapping
    public ResponseEntity<List<SkillEntity>> getAllSkills() {
        List<SkillEntity> skills = skillService.getAllSkills();
        return ResponseEntity.ok(skills);
    }

    @PostMapping("/user")
    public ResponseEntity<UserSkillEntity> addUserSkill(
            @RequestBody UserSkillDTO dto,
            @RequestParam Long userId) {

        UserSkillEntity userSkill = skillService.addUserSkill(userId, dto);
        return ResponseEntity.ok(userSkill);
    }

    @GetMapping("/user")
    public ResponseEntity<List<UserSkillEntity>> getUserSkills(
            @RequestParam Long userId) {

        List<UserSkillEntity> skills = skillService.getUserSkills(userId);

        return ResponseEntity.ok(skills);
    }
}