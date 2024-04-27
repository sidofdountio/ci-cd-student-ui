import { Injectable } from '@angular/core';
import { Observable, tap, catchError } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Student } from '../model/student';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private readonly URL = environment.URL;

  constructor(private http: HttpClient) { }

  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(`${this.URL}/students`)
      .pipe(
        tap(console.log),
        catchError(this.handlerError)
      )
  }

  saveStudents(student: Student): Observable<Student> {
    return this.http.post<Student>(`${this.URL}`, student)
      .pipe(
        tap(console.log),
        catchError(this.handlerError)
      )
  }

  getHello(): Observable<string> {
    return this.http.get<string>(`${this.URL}`)
      .pipe(
        tap(console.log),
        catchError(this.handlerError)
      )
  }

  handlerError(handlerError: HttpErrorResponse): Observable<never> {
    throw new Error(`An error occured - Error code :${handlerError.status}`);
  }
}
