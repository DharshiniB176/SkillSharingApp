import { Component, inject, OnInit } from '@angular/core';
import { AuthService } from '../../core/services/auth-service';
import { DatePicker } from 'primeng/datepicker';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-dashboard',
  imports: [DatePicker, FormsModule],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.scss'],
  standalone: true
})
export class Dashboard {

  auth = inject(AuthService);

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
  activeDays = 14
  progress = 50
}

