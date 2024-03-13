import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  standalone: true,
  template: `<p>Typical component works!</p>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TypicalComponent {}
