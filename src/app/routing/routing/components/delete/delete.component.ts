import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-delete',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<p>delete works!</p>`,
  styleUrl: './delete.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DeleteComponent { }
