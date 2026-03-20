import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-interests',
  imports: [CommonModule],
  templateUrl: './interests.html',
  styleUrl: './interests.scss',
  standalone: true
})
export class Interests {


  interests = [
    'Technology',
    'Design',
    'Business',
    'AI',
    'Healthcare',
    'Finance',
    'Marketing',
    'Data Science'
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

    console.log([...this.selected]);

  }

}

