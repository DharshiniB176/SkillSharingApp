import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface SkillSearch {
  id: number;
  name: string;
  category: string;
}

@Injectable({
  providedIn: 'root',
})


export class SkillService {
  
    private readonly API = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  searchSkills(query: string): Observable<SkillSearch[]> {
    return this.http.get<SkillSearch[]>(
      `${this.API}/skills/search?q=${query}`
    );
  }

  addSkill(payload: {
    skillName: string;
    proficiency: string;
    purpose: string;
    yearsOfExperience: number;
  }) {
    return this.http.post(`${this.API}/user/skills`, payload);
  }

  getMySkills() {
    return this.http.get<any[]>(`${this.API}/user/skills`);
  }

  removeSkill(id: number) {
    return this.http.delete(`${this.API}/user/skills/${id}`);
  }
}
