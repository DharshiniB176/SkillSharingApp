package com.skillsharing.skills.service.impl;

import com.skillsharing.skills.dto.SkillResponse;
import com.skillsharing.skills.dto.SkillSearchResponse;
import com.skillsharing.skills.dto.UserSkillRequest;
import com.skillsharing.skills.dto.UserSkillResponse;
import com.skillsharing.skills.entity.Skill;
import com.skillsharing.skills.entity.SkillCategory;
import com.skillsharing.skills.entity.UserSkill;
import com.skillsharing.skills.repository.SkillRepository;
import com.skillsharing.skills.repository.UserSkillRepository;
import com.skillsharing.skills.service.SkillService;
import com.skillsharing.user.entity.UserEntity;
import com.skillsharing.user.repository.UserRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class SkillServiceImpl implements SkillService {

    private static final int AUTO_APPROVAL_THRESHOLD = 2;

    private final SkillRepository skillRepository;
    private final UserSkillRepository userSkillRepository;
    private final UserRepository userRepository;

    public SkillServiceImpl(
            SkillRepository skillRepository,
            UserSkillRepository userSkillRepository,
            UserRepository userRepository
    ) {
        this.skillRepository = skillRepository;
        this.userSkillRepository = userSkillRepository;
        this.userRepository = userRepository;
    }

    @Override
    @Transactional
    public void addSkillToUser(UserEntity user, UserSkillRequest request) {

        String skillName = request.getSkillName().trim();

        Skill skill = skillRepository
                .findByNameIgnoreCase(skillName)
                .orElseGet(() -> createNewSkill(skillName));

        if (userSkillRepository.existsByUserAndSkill_Id(user, skill.getId())) {
            return;
        }

        UserSkill userSkill = new UserSkill();
        userSkill.setUser(user);
        userSkill.setSkill(skill);
        userSkill.setProficiency(request.getProficiency());
        userSkill.setPurpose(request.getPurpose());
        userSkill.setYearsOfExperience(request.getYearsOfExperience());


        userSkillRepository.save(userSkill);

        skill.setUsageCount(skill.getUsageCount() + 1);

        if (skill.getUsageCount() >= AUTO_APPROVAL_THRESHOLD) {
            skill.setActive(true);
            skill.setCommunityApproved(true);
        }

        skillRepository.save(skill);
    }

    private Skill createNewSkill(String skillName) {

        Skill skill = new Skill();
        skill.setName(skillName);
        skill.setNormalizedName(normalize(skillName));

        skill.setCategory(SkillCategory.OTHER);
        skill.setCustomCategory(null);
        skill.setDescription(null);
        skill.setUsageCount(0);
        skill.setActive(false);
        skill.setCommunityApproved(false);

        return skillRepository.save(skill);
    }

    private String normalize(String input) {
        return input.trim()
                .toLowerCase()
                .replaceAll("\\s+", " ");
    }


    @Override
    public List<UserSkillResponse> getMySkills(String email) {

        UserEntity user = userRepository.findByEmail(email)
                .orElseThrow(() -> new IllegalArgumentException("User not found"));

        return userSkillRepository.findByUser_Id(user.getId())
                .stream()
                .map(this::mapToResponse)
                .toList();
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

    @Override
    public void removeSkillFromUser(String email, Long skillId) {

        UserEntity user = userRepository.findByEmail(email)
                .orElseThrow(() -> new IllegalArgumentException("User not found"));

        UserSkill userSkill = userSkillRepository
                .findByUserAndSkill_Id(user, skillId)
                .orElseThrow(() -> new IllegalArgumentException("Skill not found"));

        userSkillRepository.delete(userSkill);
    }
    @Override
    public List<SkillResponse> getApprovedSkills() {
        return skillRepository.findAll().stream()
                .filter(Skill::isCommunityApproved)
                .map(this::mapSkill)
                .toList();
    }

    @Override
    public List<SkillResponse> getPendingSkills() {
        return skillRepository.findAll().stream()
                .filter(skill -> !skill.isCommunityApproved())
                .map(this::mapSkill)
                .toList();
    }
    @Override
    public void approveSkill(Long skillId) {

        Skill skill = skillRepository.findById(skillId)
                .orElseThrow(() -> new IllegalArgumentException("Skill not found"));

        skill.setCommunityApproved(true);
        skill.setActive(true);

        skillRepository.save(skill);
    }
    private SkillResponse mapSkill(Skill skill) {
        SkillResponse res = new SkillResponse();
        res.setId(skill.getId());
        res.setName(skill.getName());
        res.setCategory(skill.getCategory().name());
        res.setCommunityApproved(skill.isCommunityApproved());
        return res;
    }
    @Override
    public void addSkillToCurrentUser(String email, UserSkillRequest request) {

        UserEntity user = userRepository.findByEmail(email)
                .orElseThrow(() -> new IllegalArgumentException("User not found"));

        String normalized = request.getSkillName().trim().toLowerCase();

        Skill skill = skillRepository.findByNameIgnoreCase(normalized)
                .orElseGet(() -> {
                    Skill s = new Skill();
                    s.setName(request.getSkillName());
                    s.setNormalizedName(normalized);
                    s.setCategory(SkillCategory.OTHER);
                    s.setActive(false);
                    s.setCommunityApproved(false);
                    s.setUsageCount(0);
                    return skillRepository.save(s);
                });

        if (userSkillRepository.existsByUserAndSkill_Id(user, skill.getId())) {
            return;
        }

        UserSkill userSkill = new UserSkill();
        userSkill.setUser(user);
        userSkill.setSkill(skill);
        userSkill.setProficiency(request.getProficiency());
        userSkill.setPurpose(request.getPurpose());
        userSkill.setYearsOfExperience(request.getYearsOfExperience());

        userSkillRepository.save(userSkill);

        skill.setUsageCount(skill.getUsageCount() + 1);

        if (skill.getUsageCount() >= AUTO_APPROVAL_THRESHOLD) {
            skill.setActive(true);
            skill.setCommunityApproved(true);
        }

        skillRepository.save(skill);
    }

    @Override
    public List<SkillSearchResponse> searchSkills(String query) {

        String normalized = query.trim().toLowerCase();

        return skillRepository
                .findTop10ByCommunityApprovedTrueAndActiveTrueAndNormalizedNameContainingIgnoreCase(normalized)
                .stream()
                .map(skill -> {
                    SkillSearchResponse res = new SkillSearchResponse();
                    res.setId(skill.getId());
                    res.setName(skill.getName());
                    res.setCategory(skill.getCategory().name());
                    return res;
                })
                .toList();
    }


}