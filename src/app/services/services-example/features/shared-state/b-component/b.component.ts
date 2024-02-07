import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NonSingletonService } from '../../../services/non-singleton.service';
import { SingletonService } from '../../../services/singleton.service';

@Component({
  selector: 'b-component',
  standalone: true,
  imports: [CommonModule],
  template: ` <div>
    <button class="btn bg-slate-50" (click)="changeUserName('Joseph')">
      Change name to Joseph
    </button>

    <p class="bg-red-50">tester: {{ test() | json }}</p>
  </div>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BComponent {
  public nonSingletonService = inject(NonSingletonService);
  public singletonService = inject(SingletonService);

  test = this.singletonService.tester;

  changeUserName(name: string) {
    this.singletonService.tester.set('component2');
  }
}
