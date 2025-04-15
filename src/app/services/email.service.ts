import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EmailService {

   private apiUrl = 'http://localhost:3000/lienhe';

  constructor(private http: HttpClient) { }

  sendEmail(formData: any) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
     return this.http.post(this.apiUrl, formData, { headers }).pipe(
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
