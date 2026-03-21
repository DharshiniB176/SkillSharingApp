import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ThemeService } from '../../core/services/theme-service';
import { HowItWorks } from "./how-it-works/how-it-works";
import { Topcategory } from './topcategory/topcategory';
import { Courses } from './courses/courses';
import { Testimonials } from "./testimonials/testimonials";
import { PopularCourses } from "./popular-courses/popular-courses";
import { JoinNow } from "./join-now/join-now";
import { CarouselModule } from 'primeng/carousel';
import { ScrollTopModule } from 'primeng/scrolltop';


@Component({
  selector: 'app-landing',
  imports: [CarouselModule, Topcategory, Courses, HowItWorks, Testimonials, PopularCourses, JoinNow, ScrollTopModule],
  templateUrl: './landing.html',
  styleUrl: './landing.scss',
})
export class Landing {

  constructor(private router: Router, public theme:ThemeService) {}

  goToLogin() {
    this.router.navigate(['/auth'], { queryParams: { mode: 'login' } });
  }

  goToRegister() {
    this.router.navigate(['/auth'], { queryParams: { mode: 'register' } });
  }




}
