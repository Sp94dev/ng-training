import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AComponent } from './a-component/a.component';
import { BComponent } from './b-component/b.component';
import { NonSingletonService } from '../../services/non-singleton.service';
import { SingletonService } from '../../services/singleton.service';

@Component({
  selector: 'shared-state',
  standalone: true,
  imports: [CommonModule, AComponent, BComponent],
  template: `
    <div>
      <p>Shared state</p>
      User: {{ user() | json }}
      <div class="flex gap-2">
        <a-component />
        <b-component />
      </div>
    </div>
  `,
  providers: [NonSingletonService, SingletonService],
  styleUrl: './shared-state.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SharedStateComponent {
  public nonSingletonService = inject(NonSingletonService);
  public user = this.nonSingletonService.user;

  changeUserName(name: string) {
    this.nonSingletonService.setUser(name);
  }
}
