package com.skillsharing.skill.config;

import com.skillsharing.skill.entity.SkillEntity;
import com.skillsharing.skill.repository.SkillRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class SkillDataLoader {

    @Bean
    CommandLineRunner loadSkills(SkillRepository repository) {
        return args -> {

            if (repository.count() > 0) return;

            repository.save(new SkillEntity(null, "HTML", "Frontend", "Markup"));
            repository.save(new SkillEntity(null, "CSS", "Frontend", "Styling"));
            repository.save(new SkillEntity(null, "JavaScript", "Frontend", "JS"));
            repository.save(new SkillEntity(null, "Angular", "Frontend", "Framework"));
            repository.save(new SkillEntity(null, "React", "Frontend", "Library"));

            repository.save(new SkillEntity(null, "Java", "Backend", "Language"));
            repository.save(new SkillEntity(null, "Spring Boot", "Backend", "Framework"));

            repository.save(new SkillEntity(null, "MySQL", "Database", "SQL DB"));

            repository.save(new SkillEntity(null, "Docker", "DevOps", "Containers"));
        };
    }
}