import { Routes } from '@angular/router';
import { ParentComponent } from './parent-child/parent/parent.component';

export const routes: Routes = [
  {
    path: 'parent-child',
    component: ParentComponent,
  },
  {
    path: '*',
    redirectTo: 'parent-child',
  },
];
