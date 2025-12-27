package com.skillsharing.skills.service;

import com.skillsharing.skills.dto.SkillResponse;
import com.skillsharing.skills.dto.SkillSearchResponse;
import com.skillsharing.skills.dto.UserSkillRequest;
import com.skillsharing.skills.dto.UserSkillResponse;
import com.skillsharing.user.entity.UserEntity;

import java.util.List;

public interface SkillService {

    void addSkillToUser(UserEntity user, UserSkillRequest request);

    List<SkillSearchResponse> searchSkills(String query);


    void addSkillToCurrentUser(String email, UserSkillRequest request);

    List<UserSkillResponse> getMySkills(String email);

    void removeSkillFromUser(String email, Long skillId);

    List<SkillResponse> getApprovedSkills();

    List<SkillResponse> getPendingSkills();

    void approveSkill(Long skillId);
}
