import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from '../../../core/services/course-service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-course-details',
  imports: [],
  standalone: true,
  templateUrl: './course-details.html',
  styleUrl: './course-details.scss',
})
export class CourseDetails {

 course: any;

 videoUrl!: SafeResourceUrl;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private courseService: CourseService,
     private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {

    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.loadCourse(+id);
    }

  }

 loadCourse(id: number) {

  this.courseService.getCourses()
    .subscribe((courses: any[]) => {

      this.course = courses.find(c => c.id === id);

      this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
        this.course.videoUrl
      );

    });

}

goBack(){
  this.router.navigate(['/dashboard/courses']);
}

}
