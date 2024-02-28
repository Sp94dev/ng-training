import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-write',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<p>write works!</p>`,
  styleUrl: './write.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WriteComponent { }
