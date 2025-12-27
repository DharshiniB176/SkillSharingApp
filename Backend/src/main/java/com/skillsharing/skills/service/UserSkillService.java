package com.skillsharing.skills.service;

import com.skillsharing.skills.dto.AddSkillRequest;
import com.skillsharing.skills.dto.UserSkillResponse;

import java.util.List;

public interface UserSkillService {

    UserSkillResponse addSkill(String email, AddSkillRequest request);

    List<UserSkillResponse> getMySkills(String email);

    UserSkillResponse updateSkill(
            String email,
            Long userSkillId,
            AddSkillRequest request
    );

    void removeSkill(String email, Long userSkillId);
}
