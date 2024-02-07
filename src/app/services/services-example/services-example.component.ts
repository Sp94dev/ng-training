import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AComponent as ComponentA } from './features/shared-state/a-component/a.component';
import { BComponent as BComponent } from './features/shared-state/b-component/b.component';
import { SingletonComponent } from './features/singleton/singleton.component';
import { SharedStateComponent } from './features/shared-state/shared-state.component';

@Component({
  selector: 'app-services-example',
  standalone: true,
  imports: [
    CommonModule,
    ComponentA,
    BComponent,
    SingletonComponent,
    SharedStateComponent,
  ],
  templateUrl: 'services-example.component.html',
  styleUrl: './services-example.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServicesExampleComponent {}
