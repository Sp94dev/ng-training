import { fromEvent } from 'rxjs';

// Event Handling:
// Angular applications frequently handle user interactions, such as button clicks,
// form submissions, or keyboard events. Reactive programming simplifies event handling
// by allowing you to subscribe to observable event streams and react to events as they occur.

// Handling button click event with RxJS
const button = document.getElementById('myButton');
if (button) {
  fromEvent(button, 'click').subscribe(() => {
    console.log('Button clicked!');
  });
}
