import { Component } from '@angular/core';
import { Step } from '../../../core/models/steps';

@Component({
  selector: 'app-how-it-works',
  imports: [],
  templateUrl: './how-it-works.html',
  styleUrl: './how-it-works.scss',
})
export class HowItWorks {

  steps: Step[] = [
    {
      id: 1,
      title: 'Discover Your Path',
      description: 'Answer a few questions and explore careers that match your interests and strengths.',
      icon: '🧭'
    },
    {
      id: 2,
      title: 'Learn & Share Skills',
      description: 'Join courses, attend workshops, or teach others what you already know.',
      icon: '🧠'
    },
    {
      id: 3,
      title: 'Grow Your Career',
      description: 'Build real skills, connect with people, and move confidently toward your goals.',
      icon: '🚀'
    }
  ];
}
