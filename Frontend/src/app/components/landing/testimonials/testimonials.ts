import { Component, inject } from '@angular/core';
import { Testimonial } from '../../../core/models/testimonials';

@Component({
  selector: 'app-testimonials',
  imports: [],
  templateUrl: './testimonials.html',
  styleUrl: './testimonials.scss',
})
export class Testimonials {


testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Brooklyn Simmons',
    role: 'UI UX Designer',
    quote: 'I love this platform. It helped me structure my learning and apply skills at the right time.',
    avatar: 'assets/img/avatar/avathar-1.png',
    rating: 5
  },
  {
    id: 2,
    name: 'Bessie Cooper',
    role: 'Product Manager',
    quote: 'SkillSharing connects learning with real-world skills. The guidance feels very practical.',
    avatar: 'assets/img/avatar/avathar-2.png',
    rating: 5
  },
  {
    id: 3,
    name: 'Eleanor Pena',
    role: 'Operations Manager',
    quote: 'The workshops and community support made learning enjoyable and effective.',
    avatar: 'assets/img/avatar/avathar-3.png',
    rating: 5
  }
];

}
