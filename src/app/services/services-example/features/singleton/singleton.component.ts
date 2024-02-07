import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SingletonService } from '../../services/singleton.service';
import { NonSingletonService } from '../../services/non-singleton.service';

@Component({
  selector: 'singleton',
  standalone: true,
  imports: [CommonModule],
  providers: [SingletonService, NonSingletonService],
  template: `
    <div>
      <p>Singleton example</p>
      User: {{ user | json }}
      <div class="flex py-2 gap-2">
        <button class="btn" (click)="changeUserName('David')">
          Change name to David
        </button>
        <button class="btn bg-blue" (click)="changeUserName('Pablo')">
          Change name to Pablo
        </button>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SingletonComponent {
  public singletonService = inject(SingletonService);
  public user = this.singletonService.getUser();

  changeUserName(name: string) {
    this.user = this.singletonService.setUser(name);
  }
}
