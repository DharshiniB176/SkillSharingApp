import { Component, inject, OnInit } from '@angular/core';
import { AuthService } from '../../core/services/auth-service';
import { DatePicker } from 'primeng/datepicker';
import { FormsModule } from '@angular/forms';
import { InterestService } from '../../core/services/interest-service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-dashboard',
  imports: [DatePicker, FormsModule, CommonModule],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.scss'],
  standalone: true
})
export class Dashboard {


  interests: string[] = [];

  constructor(
  private interestService: InterestService,
  public auth: AuthService
) {}

   // Overall progress %
  overallProgress = 68;

  // Domain-wise stats
  domainStats = [
    { name: 'Web Development', percent: 75, skills: ['HTML', 'CSS', 'Angular', 'Node.js'] },
    { name: 'Data Science', percent: 52, skills: ['Python', 'SQL', 'Pandas'] },
    { name: 'Design', percent: 34, skills: ['UI Design', 'Figma'] },
    { name: 'Business', percent: 20, skills: ['SEO', 'Marketing'] }
  ];

  selectedDate = new Date();
  streak = 15;
  activeDays = 14;
  progress = 50;

  careerInsights = [
  {
    name: 'Frontend Developer',
    progress: 80,
    missingSkills: ['Node.js'],
    color: 'bg-blue-500'
  },
  {
    name: 'Backend Developer',
    progress: 60,
    missingSkills: ['Spring Boot'],
    color: 'bg-green-500'
  },
  {
    name: 'Full Stack Developer',
    progress: 50,
    missingSkills: ['Docker', 'System Design'],
    color: 'bg-purple-500'
  }
];


      allCareers = [
  {
    name: 'Frontend Developer',
    skills: ['HTML', 'CSS', 'Angular', 'Node.js']
  },
  {
    name: 'Backend Developer',
    skills: ['Java', 'Spring Boot', 'MySQL']
  }
];

userSkills = ['HTML', 'CSS', 'Angular'];



calculateCareerInsights() {

  const results: any[] = [];

  this.allCareers.forEach(career => {

    const matchedSkills = career.skills.filter(skill =>
      this.userSkills.includes(skill)
    );

    const progress = Math.round(
      (matchedSkills.length / career.skills.length) * 100
    );

    results.push({
      name: career.name,
      progress: progress,
      missingSkills: career.skills.filter(
        skill => !this.userSkills.includes(skill)
      ),
      color: this.getColor(progress)
    });

  });

  this.careerInsights = results.sort((a, b) => b.progress - a.progress);

}

getColor(progress: number): string {

  if (progress >= 75) return 'bg-green-500';
  if (progress >= 50) return 'bg-yellow-500';
  return 'bg-red-500';

}

ngOnInit() {
  this.calculateCareerInsights();
  this.loadInterests();
}

loadInterests() {

  const userId = this.auth.user()?.id;

  if (!userId) return;

  this.interestService.getInterests(userId)
    .subscribe((data: any[]) => {

      this.interests = data.map(i => i.interest);

    });

}
}

