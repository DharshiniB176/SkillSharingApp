package com.skillsharing.request.dto;

import jakarta.validation.constraints.NotNull;

public class SkillRequestDTO {

    @NotNull
    private Long teacherId;

    @NotNull
    private Long skillId;

    public Long getTeacherId() {
        return teacherId;
    }

    public void setTeacherId(Long teacherId) {
        this.teacherId = teacherId;
    }

    public Long getSkillId() {
        return skillId;
    }

    public void setSkillId(Long skillId) {
        this.skillId = skillId;
    }
}