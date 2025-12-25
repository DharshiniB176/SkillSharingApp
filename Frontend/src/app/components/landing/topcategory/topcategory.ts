import { Component } from '@angular/core';
import { Category } from '../../../core/models/category';

@Component({
  selector: 'app-topcategory',
  imports: [],
  templateUrl: './topcategory.html',
  styleUrl: './topcategory.scss',
})
export class Topcategory {

   categories: Category[] = [
      {
        id: 1,
        title: 'Web Development',
        image: 'assets/img/mobile.png',
        workshops: 120,
        courses: 85
      },
      {
        id: 2,
        title: 'Data Science',
        image: 'assets/img/data-science.png',
        workshops: 95,
        courses: 60
      },
      {
        id: 3,
        title: 'UI / UX Design',
        image: 'assets/img/graphic-design.png',
        workshops: 70,
        courses: 45
      },
      {
        id: 4,
        title: 'Business',
        image: 'assets/img/decrease.png',
        workshops: 80,
        courses: 55
      },
      {
        id: 5,
        title: 'Marketing',
        image: 'assets/img/bullhorn.png',
        workshops: 65,
        courses: 40
      },
      {
        id: 6,
        title: 'AI & ML',
        image: 'assets/img/artificial-intelligence.png',
        workshops: 90,
        courses: 58
      },
      {
        id: 7,
        title: 'IT & Softwares',
        image: 'assets/img/cloud-service.png',
        workshops: 50,
        courses: 55
      },
      {
        id: 8,
        title: 'Cloud Computing',
        image: 'assets/img/remote-access.png',
        workshops: 90,
        courses: 58
      }
    ];
}
