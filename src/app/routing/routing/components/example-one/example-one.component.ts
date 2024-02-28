import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-example-one',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<p>example-one works!</p>`,
  styleUrl: './example-one.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExampleOneComponent { }
