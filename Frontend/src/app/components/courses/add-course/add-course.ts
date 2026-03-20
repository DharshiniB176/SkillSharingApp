import { Component, EventEmitter, Output } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CourseService } from '../../../core/services/course-service';
import { AuthService } from '../../../core/services/auth-service';
@Component({
  selector: 'app-add-course',
  imports: [CommonModule, DialogModule, ButtonModule, FormsModule],
  standalone: true,
  templateUrl: './add-course.html',
  styleUrl: './add-course.scss',
})
export class AddCourse {

  visible = false;

  @Output()
  courseAdded = new EventEmitter();

  title = '';
  description = '';
  category = '';
  level = '';
  duration = '';
  videoUrl = '';
  thumbnailUrl = '';

  constructor(
    private courseService: CourseService,
    private auth: AuthService
  ) {}

  open() {
    this.visible = true;
  }

  close() {
    this.visible = false;
  }

  save() {

    const payload = {
      title: this.title,
      description: this.description,
      category: this.category,
      level: this.level,
      duration: this.duration,
      thumbnailUrl: this.thumbnailUrl,
      videoUrl: this.videoUrl,
      authorId: this.auth.user()?.id
    };

    this.courseService.createCourse(payload)
      .subscribe(() => {

        this.courseAdded.emit();
        this.close();

      });

  }

}

