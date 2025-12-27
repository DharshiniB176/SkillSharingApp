package com.skillsharing.skills.dto;

import com.skillsharing.skills.entity.ProficiencyLevel;
import com.skillsharing.skills.entity.SkillPurpose;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public class UserSkillRequest {

    @NotBlank
    private String skillName;

    @NotNull
    private ProficiencyLevel proficiency;

    @NotNull
    private SkillPurpose purpose;

    @NotNull
    private Integer yearsOfExperience;

    public String getSkillName() {
        return skillName;
    }

    public void setSkillName(String skillName) {
        this.skillName = skillName;
    }

    public ProficiencyLevel getProficiency() {
        return proficiency;
    }

    public void setProficiency(ProficiencyLevel proficiency) {
        this.proficiency = proficiency;
    }

    public SkillPurpose getPurpose() {
        return purpose;
    }

    public void setPurpose(SkillPurpose purpose) {
        this.purpose = purpose;
    }

    public Integer getYearsOfExperience() {
        return yearsOfExperience;
    }

    public void setYearsOfExperience(Integer yearsOfExperience) {
        this.yearsOfExperience = yearsOfExperience;
    }
}
