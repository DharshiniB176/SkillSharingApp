package com.skillsharing.course.controller;

import com.skillsharing.course.dto.CourseDTO;
import com.skillsharing.course.entity.CourseEntity;
import com.skillsharing.course.service.CourseService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/courses")
public class CourseController {

    private final CourseService service;

    public CourseController(CourseService service) {
        this.service = service;
    }

    @GetMapping
    public List<CourseEntity> getCourses() {
        return service.getAllCourses();
    }

    @PostMapping
    public CourseEntity create(@RequestBody CourseDTO dto) {
        return service.createCourse(dto);
    }
}