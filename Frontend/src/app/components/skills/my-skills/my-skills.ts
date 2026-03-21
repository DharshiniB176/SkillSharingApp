import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';

import { AddSkillModal } from '../add-skill-modal/add-skill-modal';
import { UserSkillService } from '../../../core/services/user-skill-service';
import { AuthService } from '../../../core/services/auth-service';

@Component({
  selector: 'app-my-skills',
  imports: [CommonModule, AddSkillModal],
  standalone: true,
  templateUrl: './my-skills.html',
  styleUrl: './my-skills.scss',
})
export class MySkills {
 skills: any[] = [];

  constructor(
    private userSkillService: UserSkillService,
    private auth: AuthService
  ) {}

  ngOnInit() {
    this.loadSkills();
  }

  loadSkills() {

    const userId = this.auth.user()?.id;

    if (!userId) return;

    this.userSkillService.getUserSkills(userId)
      .subscribe((data: any) => {

        this.skills = this.groupSkillsByCategory(data);

      });
    }

  @ViewChild(AddSkillModal)
  addSkillModal!: AddSkillModal;

  openAddSkill() {
    this.addSkillModal.open();
  }

handleSkillAdded(data: any) {
  console.log(data);
  this.loadSkills();
}

groupSkillsByCategory(data: any[]) {

  const map: any = {};

  data.forEach(skill => {

    const category = skill.skill.category;

    if (!map[category]) {
      map[category] = [];
    }

    map[category].push({
      id: skill.id,
      name: skill.skill.name,
      type: skill.type,
      level: skill.level
    });

  });

  return Object.keys(map).map(category => ({
    category,
    items: map[category]
  }));

}
}
