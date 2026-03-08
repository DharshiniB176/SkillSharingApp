import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { SelectButtonModule } from 'primeng/selectbutton';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { SelectModule } from 'primeng/select';
import { SkillService } from '../../../core/services/skill-service';
import { UserSkillService } from '../../../core/services/user-skill-service';
import { AuthService } from '../../../core/services/auth-service';

@Component({
  selector: 'app-add-skill-modal',
  imports: [ DialogModule,SelectButtonModule,ButtonModule,FormsModule, SelectModule ],
  standalone: true,
  templateUrl: './add-skill-modal.html',
  styleUrl: './add-skill-modal.scss',
})
export class AddSkillModal implements OnInit{
   visible = false;

  skillOptions: any[] = [];
@Output() skillAdded = new EventEmitter<any>();
  selectedSkill: number | null = null;
  selectedType: string | null = null;
  selectedLevel: string | null = null;
  


  constructor(
    private skillService: SkillService,
    private userSkillService: UserSkillService,
    private auth: AuthService
  ) {}

  ngOnInit() {
    this.loadSkills();
  }

  levelOptions = [
  { label: 'Beginner', value: 'Beginner' },
  { label: 'Intermediate', value: 'Intermediate' },
  { label: 'Expert', value: 'Expert' }
];

typeOptions = [
  { label: 'Teach', value: 'TEACH' },
  { label: 'Learn', value: 'LEARN' }
];

  open() {
  this.visible = true;
}

close(){
  this.visible = false;
}
  loadSkills() {

    this.skillService.getSkills().subscribe((skills) => {

      this.skillOptions = skills.map(skill => ({
        label: skill.name,
        value: skill.id
      }));

    });

}

addSkill() {

  if (!this.selectedSkill || !this.selectedType || !this.selectedLevel) {
    alert('Please fill all fields');
    return;
  }

  const userId = this.auth.user()?.id;

  if (!userId) {
    console.error('User not found');
    return;
  }

  const payload = {
    skillId: this.selectedSkill,
    type: this.selectedType,
    level: this.selectedLevel
  };

  this.userSkillService.addSkill(userId, payload)
    .subscribe(() => {

      this.skillAdded.emit(payload);

      this.close();

    });

}
}
