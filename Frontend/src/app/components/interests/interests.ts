import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AuthService } from '../../core/services/auth-service';
import { InterestService } from '../../core/services/interest-service';

@Component({
  selector: 'app-interests',
  imports: [CommonModule],
  templateUrl: './interests.html',
  styleUrl: './interests.scss',
  standalone: true
})
export class Interests {

  constructor(private auth: AuthService,private interestService: InterestService){}

 ngOnInit() {
  this.loadInterests();
}

loadInterests() {

  const userId = this.auth.user()?.id;

  if (!userId) return;

  this.interestService.getInterests(userId)
    .subscribe((data: any[]) => {

      this.selected = new Set(data.map(i => i.interest));

    });

}
  // interests = [
  //   'Technology',
  //   'Design',
  //   'Business',
  //   'AI',
  //   'Healthcare',
  //   'Finance',
  //   'Marketing',
  //   'Data Science'
  // ];

  interests = [
  'Technology',
  'Design',
  'Business',
  'AI',
  'Healthcare',
  'Finance',
  'Marketing',
  'Data Science',
  'Education',
  'Entrepreneurship',
  'Cybersecurity',
  'Blockchain',
  'Cloud Computing',
  'Sustainability',
  'Psychology',
  'Art & Culture',
  'Music',
  'Sports',
  'Travel',
  'Food & Culinary'
];
  selected: Set<string> = new Set();

  toggleInterest(item: string) {

    if (this.selected.has(item)) {
      this.selected.delete(item);
    } else {
      this.selected.add(item);
    }

  }

save() {

  const userId = this.auth.user()?.id;

  if(!userId) return;

 const selectedInterests = Array.from(this.selected)

  this.interestService.saveInterests(userId,selectedInterests)
    .subscribe(() => {
      console.log('Saved');
    });

}
}

