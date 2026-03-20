package com.skillsharing.course.service;

import com.skillsharing.course.dto.CourseDTO;
import com.skillsharing.course.entity.CourseEntity;
import com.skillsharing.course.repository.CourseRepository;
import com.skillsharing.user.entity.UserEntity;
import com.skillsharing.user.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CourseService {

    private final CourseRepository repository;
    private final UserRepository userRepository;

    public CourseService(CourseRepository repository,  UserRepository userRepository) {
        this.repository = repository;
        this.userRepository = userRepository;
    }

    public List<CourseEntity> getAllCourses() {
        return repository.findAll();
    }




    public CourseEntity createCourse(CourseDTO dto) {

        UserEntity author = userRepository.findById(dto.getAuthorId())
                .orElseThrow(() -> new RuntimeException("User not found"));

        CourseEntity course = new CourseEntity();
        course.setTitle(dto.getTitle());
        course.setDescription(dto.getDescription());
        course.setCategory(dto.getCategory());
        course.setLevel(dto.getLevel());
        course.setDuration(dto.getDuration());
        course.setVideoUrl(dto.getVideoUrl());
        course.setThumbnailUrl(dto.getThumbnailUrl());
        course.setAuthor(author);

        return repository.save(course);
    }

}