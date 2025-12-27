package com.skillsharing.skills.dto;

import com.skillsharing.skills.entity.ProficiencyLevel;
import com.skillsharing.skills.entity.SkillPurpose;

public class UserSkillResponse {
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

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

    private Long id;
    private String skillName;
    private ProficiencyLevel proficiency;
    private SkillPurpose purpose;
    private Integer yearsOfExperience;


}