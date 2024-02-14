import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  inject,
} from '@angular/core';
import { AComponent as ComponentA } from './features/shared-state/a-component/a.component';
import { BComponent as BComponent } from './features/shared-state/b-component/b.component';
import { SingletonComponent } from './features/singleton/singleton.component';
import { SharedStateComponent } from './features/shared-state/shared-state.component';
import { WSExample } from '../rxjs/real-time';
import {
  fromEvent,
  interval,
  map,
  switchMap,
  take,
  takeUntil,
  tap,
} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
@Component({
  selector: 'app-services-example',
  standalone: true,
  imports: [
    CommonModule,
    ComponentA,
    BComponent,
    SingletonComponent,
    SharedStateComponent,
  ],
  templateUrl: 'services-example.component.html',
  styleUrl: './services-example.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServicesExampleComponent {
  destroyRef = inject(DestroyRef);
  httpClient = inject(HttpClient);

  data$ = this.httpClient.get('https://api.restful-api.dev/objects').pipe(
    takeUntilDestroyed(this.destroyRef),
    map((data: any) => data.length)
  );

  constructor() {
    // WSExample();
    // const coldObservable = interval(1000);
    // const subscribtion = coldObservable.subscribe((value) =>
    //   console.log('Subscriber 1:', value)
    // );
    // subscribtion.unsubscribe();
    // setTimeout(() => {
    //   coldObservable.subscribe((value) => console.log('Subscriber 2:', value));
    // }, 3000);
    // fromEvent(document, 'click')
    //   .pipe(
    //     take(1),
    //     switchMap(() => coldObservable),
    //     tap((value) => console.log(`Subscriber 3: ${value}`))
    //   )
    //   .subscribe();
  }
}
