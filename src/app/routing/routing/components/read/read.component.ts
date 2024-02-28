import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-read',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<p>read works!</p>`,
  styleUrl: './read.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReadComponent { }
