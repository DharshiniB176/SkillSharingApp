import { Component } from '@angular/core';
import { MatchService } from '../../../core/services/match-service';
import { AuthService } from '../../../core/services/auth-service';
import { RequestService } from '../../../core/services/request-service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-matches',
  imports: [],
  standalone: true,
  templateUrl: './matches.html',
  styleUrl: './matches.scss',
})
export class Matches {


  matches: any[] = [];

  selectedSkill: string | null = null;

  constructor(
    private matchService: MatchService,
    private auth: AuthService,
    private requestService: RequestService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  // ngOnInit() {
  //   this.loadMatches();
  // }

  ngOnInit() {

  this.route.queryParams.subscribe(params => {

    const skill = params['skill'];

    if (skill) {
      this.selectedSkill = skill;
      this.loadMatchesBySkill(skill);
    } else {
      this.selectedSkill = null;
      this.loadMatches();
    }

  });

}
loadMatchesBySkill(skillName: string) {

  const userId = this.auth.user()?.id;

  if (!userId) return;

  this.matchService.getMatches(userId)
    .subscribe((data: any[]) => {

      this.matches = data.filter(
        m => m.skillName.toLowerCase() === skillName.toLowerCase()
      );

    });

}

  loadMatches() {

    const userId = this.auth.user()?.id;

    if (!userId) return;

    this.matchService.getMatches(userId)
      .subscribe((data: any) => {

        this.matches = data;

      });

  }


requested: Set<number> = new Set();


requestSession(match: any) {
  console.log("MATCHHHHHHHH:", match);

  const userId = this.auth.user()?.id;
  if (!userId) return;

  const payload = {
    teacherId: match.teacherId,
    skillId: match.skillId
  };

  this.requestService.sendRequest(userId, payload)
    .subscribe({
      next: () => {
        this.requested.add(match.userId);
      },
      error: (err) => {
        console.error('Error creating request:', err);
      }
    });
}

clearFilter() {

  this.router.navigate(['/dashboard/matches']);

}
}
