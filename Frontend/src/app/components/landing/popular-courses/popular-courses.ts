import { Component } from '@angular/core';
import { PopularCourse } from '../../../core/models/popular-course';

@Component({
  selector: 'app-popular-courses',
  imports: [],
  templateUrl: './popular-courses.html',
  styleUrl: './popular-courses.scss',
})
export class PopularCourses {

  courses: PopularCourse[] = [
    {
      id: 1,
      category: 'Web Development',
      title: 'The Python Mega Course: Build 10 Real World Applications',
      image: './assets/img/course/pop-course-1.jpeg',
      rating: 5,
      hours: '2 Hours 30 min',
      lessons: 3,
      seats: 29,
      price: 12,
      oldPrice: 41.81
    },
    {
      id: 2,
      category: 'User Interface',
      title: 'Graphic Design Masterclass – Learn GREAT Design',
      image: './assets/img/course/pop-course-4.jpeg',
      rating: 5,
      hours: '2 Hours 30 min',
      lessons: 3,
      seats: 29,
      price: 25,
      oldPrice: 38
    },
    {
      id: 3,
      category: 'Branding',
      title: 'Adobe Premiere Pro CC – Advanced Training Course',
      image: './assets/img/course/pop-course-3.jpeg',
      rating: 5,
      hours: '2 Hours 30 min',
      lessons: 3,
      seats: 29,
      price: 93,
      oldPrice: 95
    },
    {
      id: 4,
      category: 'Digital Marketing',
      title: 'Mega Digital Marketing Course A-Z: 12 Courses in 1',
      image: './assets/img/course/course-4.jpeg',
      rating: 5,
      hours: '2 Hours 30 min',
      lessons: 3,
      seats: 29,
      price: 49,
      oldPrice: 82
    }
  ];
}
