import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserSkillService {

  private api = 'http://localhost:8080/api/user-skills';

  constructor(private http: HttpClient) {}

 addSkill(userId: number, payload: any) {
  return this.http.post(
    `http://localhost:8080/api/user-skills?userId=${userId}`,
    payload
  );
}

getUserSkills(userId: number) {
  return this.http.get<any[]>(
    `http://localhost:8080/api/user-skills?userId=${userId}`
  );
}
  }


