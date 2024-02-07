import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NonSingletonService } from '../../../services/non-singleton.service';
import { SingletonService } from '../../../services/singleton.service';

@Component({
  selector: 'a-component',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button class="btn" (click)="changeUserName('David')">
      Change name to David
    </button>
    <p class="bg-red-50">tester: {{ test() | json }}</p>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AComponent {
  public nonSingletonService = inject(NonSingletonService);
  public singletonService = inject(SingletonService);

  test = this.singletonService.tester;
  changeUserName(name: string) {
    this.nonSingletonService.setUser(name);
  }
}
