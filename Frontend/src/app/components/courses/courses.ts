import { Component, OnInit, ViewChild } from '@angular/core';
import { CourseService } from '../../core/services/course-service';
import { AddCourse } from './add-course/add-course';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courses',
  imports: [AddCourse],
  standalone: true,
  templateUrl: './courses.html',
  styleUrl: './courses.scss',
})
export class Courses implements OnInit{

  courses: any[] = [];

  @ViewChild(AddCourse) addModal!: AddCourse;

openAddCourse() {
  this.addModal.open();
}
  constructor(private courseService: CourseService, private router: Router ) {}

  ngOnInit() {
    this.courseService.getCourses()
      .subscribe(data => this.courses = data);
  }

  goToCourse(id: number) {
  this.router.navigate(['/dashboard/courses', id]);
}
}
