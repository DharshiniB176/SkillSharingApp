import { Component } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { Course } from '../../../core/models/course';

@Component({
  selector: 'app-courses',
  imports: [CarouselModule],
  templateUrl: './courses.html',
  styleUrl: './courses.scss',
})
export class Courses {

  
  courses: Course[] = [
  {
    id: 1,
    title: 'Foundations of project management',
    author: 'John Gorkrok',
    image: 'assets/img/course/course-1.jpg',
    hours: 2,
    minutes: 30,
    rating: 4.5,
    price: 34.99,
    oldPrice: 49.99
  },
  {
    id: 2,
    title: 'Intro to programming for website',
    author: 'Devit Morgan',
    image: 'assets/img/course/course-2.jpg',
    hours: 45,
    minutes: 15,
    rating: 4.8,
    price: 134.99,
    oldPrice: 199.99
  },
  {
    id: 3,
    title: 'Deep reinforcement learning period',
    author: 'Wade Warren',
    image: 'assets/img/course/course-3.jpg',
    hours: 32,
    minutes: 30,
    rating: 4.7,
    price: 54.99,
    oldPrice: 79.99
  },
  {
    id: 4,
    title: 'Learn python programming masterclass',
    author: 'Guy Hawkins',
    image: 'assets/img/course/course-4.jpg',
    hours: 90,
    minutes: 30,
    rating: 4.9,
    price: 8.99,
    oldPrice: 23.99
  }
];

}
