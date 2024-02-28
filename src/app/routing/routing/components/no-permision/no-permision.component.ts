import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-no-permision',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<p>no-permision works!</p>`,
  styleUrl: './no-permision.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NoPermisionComponent { }
