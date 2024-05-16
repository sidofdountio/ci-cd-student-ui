import { Injectable } from '@angular/core';
import { Observable, tap, catchError } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Student } from '../model/student';
import { HttpClient, HttpErrorResponse, HttpEvent, HttpResponse } from '@angular/common/http';

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

  getStudent(id:any): Observable<Student> {
    return this.http.get<Student>(`${this.URL}/student/${id}`)
      .pipe(
        tap(console.log),
        catchError(this.handlerError)
      )
  }

  getStudentImage(imageUrl:any): Observable<HttpResponse<Blob>> {
    return this.http.get(`${this.URL}/image/${imageUrl}`,{responseType: 'blob',observe:'response'})
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

  uploadStudentImageUrl(formaData: FormData,id:number): Observable<HttpEvent<string>> {
    return this.http.post<string>(`${this.URL}/upload/${id}`, formaData, { observe: 'events', reportProgress: true})
      .pipe(
        tap(console.log),
        catchError(this.handlerError)
      )
  }

  getGreeting(): Observable<string> {
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
