package com.skillsharing.match.controller;

import com.skillsharing.match.dto.SkillMatchDTO;
import com.skillsharing.match.service.MatchService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/skill-matches")
public class MatchController {

    private final MatchService matchService;

    public MatchController(MatchService matchService) {
        this.matchService = matchService;
    }

    @GetMapping
    public List<SkillMatchDTO> getMatches(@RequestParam Long userId) {
        return matchService.getMatches(userId);
    }
}