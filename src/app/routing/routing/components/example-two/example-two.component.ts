import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-example-two',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<p>example-two works!</p>`,
  styleUrl: './example-two.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExampleTwoComponent { }
