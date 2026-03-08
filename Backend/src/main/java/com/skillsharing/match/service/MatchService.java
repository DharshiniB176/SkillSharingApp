package com.skillsharing.match.service;

import com.skillsharing.match.dto.SkillMatchDTO;
import com.skillsharing.userskill.repository.UserSkillRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MatchService {

    private final UserSkillRepository userSkillRepository;

    public MatchService(UserSkillRepository userSkillRepository) {
        this.userSkillRepository = userSkillRepository;
    }

    public List<SkillMatchDTO> getMatches(Long userId) {
        return userSkillRepository.findSkillMatches(userId);
    }
}