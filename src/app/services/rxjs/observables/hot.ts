import { Observable, fromEvent } from 'rxjs';

// Create a hot observable from a DOM event
const clickObservable = fromEvent(document, 'click');

// Subscribe to the hot observable
clickObservable.subscribe((event) => console.log('Subscriber 1:', event));

// Another subscriber subscribing after some time
setTimeout(() => {
  clickObservable.subscribe((event) => console.log('Subscriber 2:', event));
}, 2000);
