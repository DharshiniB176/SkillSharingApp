package com.skillsharing.skills.dto;

import com.skillsharing.skills.entity.ProficiencyLevel;
import com.skillsharing.skills.entity.SkillPurpose;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.PositiveOrZero;

public class AddSkillRequest {

    @NotNull
    private Long skillId;

    @NotNull
    private ProficiencyLevel proficiency;

    @NotNull
    private SkillPurpose purpose;

    @PositiveOrZero
    private Integer yearsOfExperience;

    // getters & setters

    public Long getSkillId() {
        return skillId;
    }

    public ProficiencyLevel getProficiency() {
        return proficiency;
    }

    public SkillPurpose getPurpose() {
        return purpose;
    }

    public Integer getYearsOfExperience() {
        return yearsOfExperience;
    }

    public void setSkillId(Long skillId) {
        this.skillId = skillId;
    }

    public void setProficiency(ProficiencyLevel proficiency) {
        this.proficiency = proficiency;
    }

    public void setPurpose(SkillPurpose purpose) {
        this.purpose = purpose;
    }

    public void setYearsOfExperience(Integer yearsOfExperience) {
        this.yearsOfExperience = yearsOfExperience;
    }
}
