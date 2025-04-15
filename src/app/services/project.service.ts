import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

   private apiUrl = 'http://localhost:3000/project';

  constructor(private http: HttpClient) { }

  getProjects() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
     return this.http.get(this.apiUrl, { headers }).pipe(
      catchError(error => {
        console.error('Error from service:', error);
        let errorMsg = 'Lỗi không xác định';
        if (error.error?.message) {
          errorMsg = error.error.message;
        } else if (error.status === 0) {
          errorMsg = 'Không thể kết nối đến server';
        }
        return throwError(() => new Error(errorMsg));
      })
    );
  }

  getProjectById(id: string) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
     return this.http.get(`${this.apiUrl}/${id}`, { headers }).pipe(
      catchError(error => {
        console.error('Error from service:', error);
        let errorMsg = 'Lỗi không xác định';
        if (error.error?.message) {
          errorMsg = error.error.message;
        } else if (error.status === 0) {
          errorMsg = 'Không thể kết nối đến server';
        }
        return throwError(() => new Error(errorMsg));
      })
    );
  }
}
