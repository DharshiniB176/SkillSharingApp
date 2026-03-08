package com.skillsharing.userskill.repository;

import com.skillsharing.match.dto.SkillMatchDTO;
import com.skillsharing.userskill.entity.UserSkillEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserSkillRepository extends JpaRepository<UserSkillEntity, Long> {

    @Query("""
SELECT new com.skillsharing.match.dto.SkillMatchDTO(
    u.id,
    u.fullName,
    s.name,
    us.level
)
FROM UserSkillEntity us
JOIN us.user u
JOIN us.skill s
WHERE us.type = 'TEACH'
AND s.id IN (
    SELECT us2.skill.id
    FROM UserSkillEntity us2
    WHERE us2.user.id = :userId
    AND us2.type = 'LEARN'
)
""")
    List<SkillMatchDTO> findSkillMatches(Long userId);
    List<UserSkillEntity> findByUserId(Long userId);
}
