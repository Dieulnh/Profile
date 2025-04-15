import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
@Injectable({ providedIn: 'root' })
export class UserService {
  private apiUrl = 'http://localhost:3000/home';

  constructor(private http: HttpClient) {}

 getUser(): Observable<any> {
  return of({
    user: { name: 'John Doe' },
    education: {
      school: 'FPT Polytechnic College',
      major: 'Frontend Development',
      graduation: '2025',
      gpa: '3.8/4.0'
    },
    projects: [/*...*/]
  });
}}