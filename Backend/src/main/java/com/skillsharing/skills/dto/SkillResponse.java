package com.skillsharing.skills.dto;

public class SkillResponse {

    private Long id;
    private String name;
    private String category;
    private boolean communityApproved;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public boolean isCommunityApproved() {
        return communityApproved;
    }

    public void setCommunityApproved(boolean communityApproved) {
        this.communityApproved = communityApproved;
    }
}
