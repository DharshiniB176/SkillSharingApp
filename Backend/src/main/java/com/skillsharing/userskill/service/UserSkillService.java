package com.skillsharing.userskill.service;

import com.skillsharing.skill.entity.SkillEntity;
import com.skillsharing.skill.repository.SkillRepository;
import com.skillsharing.userskill.dto.UserSkillDTO;
import com.skillsharing.userskill.entity.UserSkillEntity;
import com.skillsharing.userskill.entity.SkillType;
import com.skillsharing.userskill.repository.UserSkillRepository;
import com.skillsharing.user.entity.UserEntity;
import com.skillsharing.user.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserSkillService {

    private final UserSkillRepository userSkillRepository;
    private final SkillRepository skillRepository;
    private final UserRepository userRepository;

    public UserSkillService(UserSkillRepository userSkillRepository,
                            SkillRepository skillRepository,
                            UserRepository userRepository) {
        this.userSkillRepository = userSkillRepository;
        this.skillRepository = skillRepository;
        this.userRepository = userRepository;
    }

    public UserSkillEntity addUserSkill(Long userId, UserSkillDTO dto) {

        UserEntity user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found"));

        SkillEntity skill = skillRepository.findById(dto.getSkillId())
                .orElseThrow(() -> new RuntimeException("Skill not found"));

        UserSkillEntity userSkill = new UserSkillEntity();
        userSkill.setUser(user);
        userSkill.setSkill(skill);
        userSkill.setType(SkillType.valueOf(dto.getType().toUpperCase()));
        userSkill.setLevel(dto.getLevel());

        return userSkillRepository.save(userSkill);
    }

    public List<UserSkillEntity> getUserSkills(Long userId) {
        return userSkillRepository.findByUserId(userId);
    }
}