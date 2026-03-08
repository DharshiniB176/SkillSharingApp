import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Skill } from '../models/Skill';


@Injectable({
  providedIn: 'root'
})
export class SkillService {

  private api = 'http://localhost:8080/api/skills';

  constructor(private http: HttpClient) {}

  getSkills(): Observable<Skill[]> {
    return this.http.get<Skill[]>(this.api);
  }

}