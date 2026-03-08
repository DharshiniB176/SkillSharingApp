package com.skillsharing.match.dto;

public class SkillMatchDTO {

    private Long userId;
    private String userName;
    private String skillName;
    private String level;

    public SkillMatchDTO(Long userId, String userName, String skillName, String level) {
        this.userId = userId;
        this.userName = userName;
        this.skillName = skillName;
        this.level = level;
    }

    public Long getUserId() {
        return userId;
    }

    public String getUserName() {
        return userName;
    }

    public String getSkillName() {
        return skillName;
    }

    public String getLevel() {
        return level;
    }
}