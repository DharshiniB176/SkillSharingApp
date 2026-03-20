package com.skillsharing.request.entity;

import com.skillsharing.user.entity.UserEntity;
import com.skillsharing.skill.entity.SkillEntity;
import jakarta.persistence.*;

@Entity
@Table(name = "skill_requests")
public class SkillRequestEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "requester_id")
    private UserEntity requester;

    @ManyToOne
    @JoinColumn(name = "teacher_id")
    private UserEntity teacher;

    @ManyToOne
    @JoinColumn(name = "skill_id")
    private SkillEntity skill;

    @Enumerated(EnumType.STRING)
    private RequestStatus status;

    public Long getId() {
        return id;
    }

    public UserEntity getRequester() {
        return requester;
    }

    public void setRequester(UserEntity requester) {
        this.requester = requester;
    }

    public UserEntity getTeacher() {
        return teacher;
    }

    public void setTeacher(UserEntity teacher) {
        this.teacher = teacher;
    }

    public SkillEntity getSkill() {
        return skill;
    }

    public void setSkill(SkillEntity skill) {
        this.skill = skill;
    }

    public RequestStatus getStatus() {
        return status;
    }

    public void setStatus(RequestStatus status) {
        this.status = status;
    }
}