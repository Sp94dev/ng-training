import { Routes } from '@angular/router';
import { ParentComponent } from './parent-child/parent/parent.component';
import { StylingComponent } from './styling/styling.component';
import { DirectiveExampleComponent } from './directives/directive-example/directive-example.component';
import { ServicesExampleComponent } from './services/services-example/services-example.component';
import { SignalsComponent } from './services/signals/signals.component';

export const routes: Routes = [
  {
    path: 'parent-child',
    component: ParentComponent,
  },
  {
    path: 'styling',
    component: StylingComponent,
  },
  {
    path: 'directives',
    component: DirectiveExampleComponent,
  },
  {
    path: 'services',
    component: ServicesExampleComponent,
  },
  {
    path: 'signals',
    component: SignalsComponent,
  },
  {
    path: '**',
    redirectTo: 'parent-child',
  },
];
