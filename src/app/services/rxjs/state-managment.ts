import { BehaviorSubject } from 'rxjs';

// State managment:
// Managing application state is crucial in Angular development.
// Reactive programming allows you to model state changes as observable data streams,
// making it easier to manage and update application state in response to user actions or
// external events.

export class StateService {
  private _count = new BehaviorSubject<number>(0);
  count$ = this._count.asObservable();

  incrementCount() {
    this._count.next(this._count.value + 1);
  }

  decrementCount() {
    this._count.next(this._count.value - 1);
  }
}
