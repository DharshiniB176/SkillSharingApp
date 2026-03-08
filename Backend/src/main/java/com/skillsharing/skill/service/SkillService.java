package com.skillsharing.skill.service;

import com.skillsharing.skill.dto.SkillDTO;
import com.skillsharing.skill.entity.SkillEntity;
import com.skillsharing.skill.repository.SkillRepository;
import com.skillsharing.userskill.entity.SkillType;
import org.springframework.stereotype.Service;

import com.skillsharing.userskill.dto.UserSkillDTO;
import com.skillsharing.userskill.entity.UserSkillEntity;
import com.skillsharing.userskill.repository.UserSkillRepository;
import com.skillsharing.user.entity.UserEntity;
import com.skillsharing.user.repository.UserRepository;

import java.util.List;
@Service
public class SkillService {

    private final SkillRepository skillRepository;
    private final UserSkillRepository userSkillRepository;
    private final UserRepository userRepository;

    public SkillService(SkillRepository skillRepository,
                        UserSkillRepository userSkillRepository,
                        UserRepository userRepository) {
        this.skillRepository = skillRepository;
        this.userSkillRepository = userSkillRepository;
        this.userRepository = userRepository;
    }

    public SkillEntity createSkill(SkillDTO dto) {

        SkillEntity skill = new SkillEntity();
        skill.setName(dto.getName());
        skill.setCategory(dto.getCategory());
        skill.setDescription(dto.getDescription());

        return skillRepository.save(skill);
    }

    public List<SkillEntity> getAllSkills() {
        return skillRepository.findAll();
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