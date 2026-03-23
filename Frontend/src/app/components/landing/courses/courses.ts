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
    image: 'assets/img/course/course-4.jpeg',
    hours: 90,
    minutes: 30,
    rating: 4.9,
    price: 8.99,
    oldPrice: 23.99
  },
  {
    id: 5,
    title: 'JavaScript Essentials for Beginners',
    author: 'Courtney Henry',
    image: 'assets/img/course/course-5.jpeg',
    hours: 45,
    minutes: 0,
    rating: 4.7,
    price: 12.99,
    oldPrice: 29.99
  },
  {
    id: 6,
    title: 'Mastering React and Redux',
    author: 'Theresa Webb',
    image: 'assets/img/course/course-1.jpg',
    hours: 60,
    minutes: 15,
    rating: 4.8,
    price: 15.99,
    oldPrice: 34.99
  },
  {
    id: 7,
    title: 'Data Science with R',
    author: 'Marvin McKinney',
    image: 'assets/img/course/course-5.jpeg',
    hours: 75,
    minutes: 20,
    rating: 4.6,
    price: 10.99,
    oldPrice: 27.99
  },
  {
    id: 8,
    title: 'UI/UX Design Fundamentals',
    author: 'Kathryn Murphy',
    image: 'assets/img/course/course-4.jpeg',
    hours: 30,
    minutes: 45,
    rating: 4.5,
    price: 9.99,
    oldPrice: 19.99
  }
];

}
