package com.skillsharing.request.repository;

import com.skillsharing.request.entity.SkillRequestEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface SkillRequestRepository extends JpaRepository<SkillRequestEntity, Long> {
    List<SkillRequestEntity> findByTeacherId(Long teacherId);

    List<SkillRequestEntity> findByRequesterId(Long requesterId);

    boolean existsByRequesterIdAndTeacherIdAndSkillId(
            Long requesterId,
            Long teacherId,
            Long skillId
    );
}