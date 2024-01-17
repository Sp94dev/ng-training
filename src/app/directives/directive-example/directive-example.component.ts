import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HighlightAttributeDirective } from '../highlight.attribute.directive';
import { UnlessStructuralDirective } from '../unless.structural.directive';

@Component({
  selector: 'app-directive-example',
  standalone: true,
  imports: [
    CommonModule,
    HighlightAttributeDirective,
    UnlessStructuralDirective,
  ],
  template: ` <p appHighlight>AttributeDirective</p>`,
  styleUrl: './directive-example.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DirectiveExampleComponent {
  condition = false;
}
