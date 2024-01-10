import { Routes } from '@angular/router';
import { ParentComponent } from './parent-child/parent/parent.component';
import { StylingComponent } from './styling/styling.component';

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
    path: '**',
    redirectTo: 'parent-child',
  },
];
