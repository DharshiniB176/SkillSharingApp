import { Component, inject, OnInit } from '@angular/core';
import { AuthService } from '../../core/services/auth-service';
import { SkillService } from '../../core/services/skill-service';
import { SkillSelect } from "../skill-select/skill-select";

@Component({
  selector: 'app-dashboard',
  imports: [SkillSelect],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {

  auth = inject(AuthService);
}

