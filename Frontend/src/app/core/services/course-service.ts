import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CourseService {

  constructor(private http: HttpClient) {}

  getCourses() {
    return this.http.get<any[]>('http://localhost:8080/api/courses');
  }

  createCourse(payload: any) {
  return this.http.post('http://localhost:8080/api/courses', payload);
}
}
