import { Observable, interval, fromEvent, take, switchMap, tap } from 'rxjs';

// Create a cold observable that emits values every second
const coldObservable = interval(1000);

// Subscribe to the cold observable
// coldObservable.subscribe((value) => console.log('Subscriber 1:', value));

// Another subscriber subscribing after some time
// setTimeout(() => {
//   coldObservable.subscribe((value) => console.log('Subscriber 2:', value));
// }, 3000);

fromEvent(document, 'click')
  .pipe(
    take(1),
    switchMap(() => coldObservable),
    tap((value) => console.log(`Subscriber 3: ${value}`))
  )
  .subscribe();

console.log('Click to WEBSITE VIEW panel');
