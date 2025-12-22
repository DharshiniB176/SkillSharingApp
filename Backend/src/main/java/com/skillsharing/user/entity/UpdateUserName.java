package com.skillsharing.user.entity;

import jakarta.validation.constraints.NotBlank;

public class UpdateUserName {

    @NotBlank
    private String fullName;

    public String getFullName() {
        return fullName;
    }

    public void  putFullName(String fullName){
        this.fullName = fullName;
    }
}

