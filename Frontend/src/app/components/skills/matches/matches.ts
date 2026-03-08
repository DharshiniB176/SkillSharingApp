import { Component } from '@angular/core';
import { MatchService } from '../../../core/services/match-service';
import { AuthService } from '../../../core/services/auth-service';

@Component({
  selector: 'app-matches',
  imports: [],
  standalone: true,
  templateUrl: './matches.html',
  styleUrl: './matches.scss',
})
export class Matches {


  matches: any[] = [];

  constructor(
    private matchService: MatchService,
    private auth: AuthService
  ) {}

  ngOnInit() {
    this.loadMatches();
  }

  loadMatches() {

    const userId = this.auth.user()?.id;

    if (!userId) return;

    this.matchService.getMatches(userId)
      .subscribe((data: any) => {

        this.matches = data;

      });

  }
}
