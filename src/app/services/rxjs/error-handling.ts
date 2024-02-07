import { throwError } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { catchError } from 'rxjs/operators';

// Error handling:
// RxJS provides robust error handling mechanisms,
// allowing you to gracefully handle errors that may occur during asynchronous operations.
// This ensures better resilience and stability in Angular applications.

// Handling HTTP request errors with catchError operator
ajax
  .getJSON('https://api.example.com/data')
  .pipe(
    catchError((error) => {
      console.error('Error fetching data:', error);
      return throwError(() => Error('Failed to fetch data'));
    })
  )
  .subscribe((data) => {
    console.log('Data:', data);
  });
