import { Component, inject, signal } from '@angular/core';
import { SkillSearch, SkillService } from '../../core/services/skill-service';
import { debounceTime, Subject, switchMap } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


type Proficiency = 'BEGINNER' | 'INTERMEDIATE' | 'ADVANCED';
type Purpose = 'LEARN' | 'LEARNING' | 'HOBBY';

interface SkillOption {
  id: number;
  name: string;
  category: string;
}

interface UserSkillDraft {
  skillName: string;
  proficiency: Proficiency;
  purpose: Purpose;
  yearsOfExperience: number;
}

@Component({
  selector: 'app-skill-select',
  imports: [CommonModule, FormsModule],
  templateUrl: './skill-select.html',
  styleUrl: './skill-select.scss',
})
export class SkillSelect {
 private api = inject(SkillService);

  domains = [
    {
      name: 'Web Development',
      skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Angular', 'React', 'Node.js']
    },
    {
      name: 'Data Science',
      skills: ['Python', 'Pandas', 'NumPy', 'Machine Learning', 'Deep Learning', 'SQL']
    },
    {
      name: 'Design',
      skills: ['UI Design', 'UX Research', 'Figma', 'Adobe XD', 'Design Systems']
    },
    {
      name: 'Business',
      skills: ['Product Management', 'Marketing', 'SEO', 'Finance', 'Entrepreneurship']
    }
  ];

  selectedDomain = signal<any | null>(null);
  selectedSkill = signal<string | null>(null);

  mySkills = signal<any[]>([]);

  form = signal({
    skillName: '',
    proficiency: 'BEGINNER',
    purpose: 'CAREER',
    yearsOfExperience: 0
  });

  ngOnInit() {
    this.loadMySkills();
  }

  loadMySkills() {
    this.api.getMySkills().subscribe(res => this.mySkills.set(res));
  }

  selectSkill(skill: string) {
    this.selectedSkill.set(skill);
    this.form.update(f => ({ ...f, skillName: skill }));
  }

  saveSkill() {
    this.api.addSkill(this.form()).subscribe(() => {
      this.resetForm();
      this.loadMySkills();
    });
  }

  deleteSkill(id: number) {
    this.api.removeSkill(id).subscribe(() => this.loadMySkills());
  }

  resetForm() {
    this.selectedSkill.set(null);
    this.form.set({
      skillName: '',
      proficiency: 'BEGINNER',
      purpose: 'CAREER',
      yearsOfExperience: 0
    });
  }
}