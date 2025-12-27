package com.skillsharing.skills.repository;

import com.skillsharing.skills.entity.UserSkill;
import com.skillsharing.user.entity.UserEntity;
import org.apache.catalina.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface UserSkillRepository extends JpaRepository<UserSkill, Long> {

    List<UserSkill> findByUser_Id(Long userId);


    Optional<UserSkill> findByUserAndSkill_Id(UserEntity user, Long skillId);

    boolean existsByUserAndSkill_Id(UserEntity user, Long skillId);
}
