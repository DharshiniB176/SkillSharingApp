package com.skillsharing.interest.repository;

import com.skillsharing.interest.entity.UserInterestEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface UserInterestRepository
        extends JpaRepository<UserInterestEntity, Long> {

    List<UserInterestEntity> findByUserId(Long userId);
}