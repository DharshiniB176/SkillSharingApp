import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RequestService {
  constructor(private http: HttpClient) {}

   sendRequest(userId: number, payload: any) {

  const token = localStorage.getItem('token');

  return this.http.post(
    `http://localhost:8080/api/skill-requests?userId=${userId}`,
    payload,
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );

}

  getIncomingRequests(userId: number) {
  return this.http.get(
    `http://localhost:8080/api/skill-requests/incoming?userId=${userId}`
  );
}

updateRequestStatus(requestId: number, status: string) {
  return this.http.put(
    `http://localhost:8080/api/skill-requests/${requestId}/status?status=${status}`,
    {}
  );
}

getOutgoingRequests(userId: number) {
  return this.http.get(
    `http://localhost:8080/api/skill-requests/outgoing?userId=${userId}`
  );
}

}
