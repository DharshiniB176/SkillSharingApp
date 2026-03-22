import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InterestService {

   constructor(private http: HttpClient) {}

  saveInterests(userId: number, interests: string[]) {
    return this.http.post(
      `http://localhost:8080/api/interests?userId=${userId}`,
      interests
    );
  }

  getInterests(userId: number) {
    return this.http.get<any[]>(
      `http://localhost:8080/api/interests?userId=${userId}`
    );
  }
}
