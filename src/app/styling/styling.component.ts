import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-styling',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<p>styling works!</p>`,
  styleUrl: './styling.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StylingComponent { }
