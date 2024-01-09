import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss',
})
export class ChildComponentComponent {
  @Input() name: string = '';

  @Output() someEvent = new EventEmitter<string>();

  onButtonClick() {
    this.someEvent.emit('Some value');
  }
}
