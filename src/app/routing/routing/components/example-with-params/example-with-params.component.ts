import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  inject,
} from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-example-with-params',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `<div>
    <p>example-with-params works!</p>
    <div class="flex gap-4">
      <button
        class="btn"
        [routerLink]="['/', 'routing', 'example-with-params', '1']"
      >
        1
      </button>
      <button
        class="btn"
        [routerLink]="['/', 'routing', 'example-with-params', '2']"
      >
        2
      </button>
      <button class="btn" routerLink="/routing/example-with-params/3">3</button>
      <button class="btn" routerLink="../4">4</button>
      <button
        class="btn"
        [routerLink]="['../', '5', { extra: true }]"
        [queryParams]="{ query: 'test' }"
      >
        5
      </button>
    </div>
    <div class="grid grid-cols-2 grid-rows-2  gap-1 mt-4">
      <span>query params: </span><span>{{ query }}</span>
      <span>route params: </span><span>{{ id }}</span>
    </div>
  </div>`,
  styleUrl: './example-with-params.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExampleWithParamsComponent {
  routerOutlet = inject(RouterOutlet);

  @Input() id?: string;
  @Input() query?: string;
}
