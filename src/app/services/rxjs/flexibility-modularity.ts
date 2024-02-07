import { merge, interval } from 'rxjs';
import { mapTo } from 'rxjs/operators';

// Code Flexibility and Modularity:
// Reactive programming promotes a modular and composable coding style,
// where components can be easily composed and combined to create complex behavior.
// This approach enhances code reusability, maintainability, and testability in Angular applications.

// Combining multiple observables with merge operator
const observable1$ = interval(1000).pipe(mapTo('Observable 1'));
const observable2$ = interval(1500).pipe(mapTo('Observable 2'));

merge(observable1$, observable2$).subscribe((value) => {
  console.log('Merged value:', value);
});
