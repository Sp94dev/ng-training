import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// Asynchronous Operations:
// Angular applications often involve asynchronous tasks like handling HTTP requests,
// user input, or timer events. Reactive programming with RxJS provides a convenient way
// to manage these asynchronous operations, making code easier to read and maintain.

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  // Fetching data asynchronously with HttpClient
  fetchData(): Observable<any> {
    return this.http.get<any>('https://api.example.com/data');
  }
}
