package com.skillsharing.skills.service.impl;

import com.skillsharing.skills.dto.AddSkillRequest;
import com.skillsharing.skills.dto.UserSkillResponse;
import com.skillsharing.skills.entity.Skill;
import com.skillsharing.skills.entity.UserSkill;
import com.skillsharing.skills.repository.SkillRepository;
import com.skillsharing.skills.repository.UserSkillRepository;
import com.skillsharing.skills.service.UserSkillService;
import com.skillsharing.user.entity.UserEntity;
import com.skillsharing.user.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class UserSkillServiceImpl implements UserSkillService {

    private final UserRepository userRepository;
    private final SkillRepository skillRepository;
    private final UserSkillRepository userSkillRepository;

    public UserSkillServiceImpl(
            UserRepository userRepository,
            SkillRepository skillRepository,
            UserSkillRepository userSkillRepository) {
        this.userRepository = userRepository;
        this.skillRepository = skillRepository;
        this.userSkillRepository = userSkillRepository;
    }

    @Override
    public UserSkillResponse addSkill(String email, AddSkillRequest request) {

        UserEntity user = userRepository.findByEmail(email)
                .orElseThrow(() -> new IllegalArgumentException("User not found"));

        Skill skill = skillRepository.findById(request.getSkillId())
                .orElseThrow(() -> new IllegalArgumentException("Skill not found"));

        if (userSkillRepository.existsByUserAndSkill_Id(user, skill.getId())) {
            throw new IllegalArgumentException("Skill already added");
        }

        UserSkill userSkill = new UserSkill();
        userSkill.setUser(user);
        userSkill.setSkill(skill);
        userSkill.setProficiency(request.getProficiency());
        userSkill.setPurpose(request.getPurpose());
        userSkill.setYearsOfExperience(request.getYearsOfExperience());

        UserSkill saved = userSkillRepository.save(userSkill);

        return mapToResponse(saved);
    }

    @Override
    public List<UserSkillResponse> getMySkills(String email) {

        UserEntity user = userRepository.findByEmail(email)
                .orElseThrow(() -> new IllegalArgumentException("User not found"));

        return userSkillRepository.findByUser_Id(user.getId())
                .stream()
                .map(this::mapToResponse)
                .collect(Collectors.toList());
    }

    @Override
    public UserSkillResponse updateSkill(
            String email,
            Long userSkillId,
            AddSkillRequest request) {

        UserSkill userSkill = userSkillRepository.findById(userSkillId)
                .orElseThrow(() -> new IllegalArgumentException("User skill not found"));

        if (!userSkill.getUser().getEmail().equals(email)) {
            throw new IllegalArgumentException("Unauthorized");
        }

        userSkill.setProficiency(request.getProficiency());
        userSkill.setPurpose(request.getPurpose());
        userSkill.setYearsOfExperience(request.getYearsOfExperience());

        return mapToResponse(userSkillRepository.save(userSkill));
    }

    @Override
    public void removeSkill(String email, Long userSkillId) {

        UserEntity user = userRepository.findByEmail(email)
                .orElseThrow(() -> new IllegalArgumentException("User not found"));

        UserSkill userSkill = userSkillRepository.findById(userSkillId)
                .orElseThrow(() -> new IllegalArgumentException("User skill not found"));

        if (!userSkill.getUser().getId().equals(user.getId())) {
            throw new IllegalArgumentException("Unauthorized skill removal");
        }

        userSkillRepository.delete(userSkill);
    }


    private UserSkillResponse mapToResponse(UserSkill userSkill) {

        UserSkillResponse response = new UserSkillResponse();
        response.setId(userSkill.getId());
        response.setSkillName(userSkill.getSkill().getName());
        response.setProficiency(userSkill.getProficiency());
        response.setPurpose(userSkill.getPurpose());
        response.setYearsOfExperience(userSkill.getYearsOfExperience());

        return response;
    }

}
