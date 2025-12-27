package com.skillsharing.skills.controller;


import com.skillsharing.skills.dto.SkillResponse;
import com.skillsharing.skills.dto.SkillSearchResponse;
import com.skillsharing.skills.service.SkillService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
    @RequestMapping("/skills")
    public class SkillController {

        private final SkillService skillService;

        public SkillController(SkillService skillService) {
            this.skillService = skillService;
        }

        @GetMapping
        public List<SkillResponse> approvedSkills() {
            return skillService.getApprovedSkills();
        }

        @GetMapping("/search")
        public List<SkillSearchResponse> searchSkills(
                @RequestParam String q
        ) {
            return skillService.searchSkills(q);
        }
    }




