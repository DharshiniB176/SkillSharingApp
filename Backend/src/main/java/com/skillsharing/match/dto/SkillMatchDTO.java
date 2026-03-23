package com.skillsharing.match.dto;

public class SkillMatchDTO {

    private Long teacherId;
    private String userName;
    private String skillName;
    private String level;
    private Long skillId;

    public SkillMatchDTO(
            Long teacherId,
            String userName,
            Long skillId,
            String skillName,
            String level
    ) {
        this.teacherId = teacherId;
        this.userName = userName;
        this.skillId = skillId;
        this.skillName = skillName;
        this.level = level;
    }

    public Long getTeacherId() {
        return teacherId;
    }

    public void setTeacherId(Long teacherId) {
        this.teacherId = teacherId;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getSkillName() {
        return skillName;
    }

    public void setSkillName(String skillName) {
        this.skillName = skillName;
    }

    public String getLevel() {
        return level;
    }

    public void setLevel(String level) {
        this.level = level;
    }

    public Long getSkillId() {
        return skillId;
    }

    public void setSkillId(Long skillId) {
        this.skillId = skillId;
    }
}