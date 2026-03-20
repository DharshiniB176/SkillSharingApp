import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrer',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './carrer.html',
  styleUrl: './carrer.scss',
})
export class Carrer {

  constructor(private router: Router){}
    careers = [
    {
      name: 'Frontend Developer',
      match: 80,
      requiredSkills: ['HTML', 'CSS', 'Angular'],
      missingSkills: ['Node.js']
    },
    {
      name: 'Data Scientist',
      match: 60,
      requiredSkills: ['Python'],
      missingSkills: ['Machine Learning', 'Statistics']
    },
    {
      name: 'UI/UX Designer',
      match: 70,
      requiredSkills: ['Figma', 'Design Principles'],
      missingSkills: ['User Research']
    }
  ];


learnSkill(skill: string) {

  this.router.navigate(['/dashboard/matches'], {
    queryParams: { skill: skill }
  });
}
}
