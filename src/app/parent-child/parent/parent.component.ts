import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ChildComponentComponent } from '../child/child.component';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [CommonModule, ChildComponentComponent],
  template: `<div>
    <h1>Test</h1>
    <app-child name="John Kowalski" (someEvent)="handleSomeEvent($event)" />
    <p>Our event value: {{ eventValue }}</p>
  </div>`,
  styleUrl: './parent.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ParentComponent {
  eventValue: string = '';

  handleSomeEvent(value: string) {
    this.eventValue = value;
  }
}
