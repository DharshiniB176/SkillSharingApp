package com.skillsharing.skills.entity;

import com.skillsharing.user.entity.UserEntity;
import jakarta.persistence.*;

@Entity
@Table(
        name = "user_skills",
        uniqueConstraints = {
                @UniqueConstraint(columnNames = {"user_id", "skill_id"})
        }
)
public class UserSkill {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "user_id")
    private UserEntity user;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "skill_id")
    private Skill skill;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private ProficiencyLevel proficiency;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private SkillPurpose purpose;

    @Column(nullable = false)
    private Integer yearsOfExperience;

    // getters & setters

    public Long getId() {
        return id;
    }

    public UserEntity getUser() {
        return user;
    }

    public Skill getSkill() {
        return skill;
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

    public void setId(Long id) {
        this.id = id;
    }

    public void setUser(UserEntity user) {
        this.user = user;
    }

    public void setSkill(Skill skill) {
        this.skill = skill;
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
