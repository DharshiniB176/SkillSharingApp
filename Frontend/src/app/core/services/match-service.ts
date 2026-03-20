import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MatchService {

  constructor(private http: HttpClient) {}

  getMatches(userId: number) {
    return this.http.get<any[]>(
      `http://localhost:8080/api/skill-matches?userId=${userId}`
    );
  }

    sendRequest(payload: any) {
    return this.http.post(
      "http://localhost:8080/api/skill-requests",
      payload
    );
  }

}
