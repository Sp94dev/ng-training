import { Routes } from '@angular/router';
import { ParentComponent } from './parent-child/parent/parent.component';
import { StylingComponent } from './styling/styling.component';
import { DirectiveExampleComponent } from './directives/directive-example/directive-example.component';
import { ServicesExampleComponent } from './services/services-example/services-example.component';
import { SignalsComponent } from './services/signals/signals.component';
import { RoutingComponent } from './routing/routing/routing.component';
import { ExampleOneComponent } from './routing/routing/components/example-one/example-one.component';
import { ExampleTwoComponent } from './routing/routing/components/example-two/example-two.component';
import { ExampleWithParamsComponent } from './routing/routing/components/example-with-params/example-with-params.component';
import { LazyExampleComponent } from './routing/routing/components/lazy-example/lazy-example.component';
import { ReadComponent } from './routing/routing/components/read/read.component';
import { deleteGuard, readGuard, writeGuard } from './routing/routing/guards';
import { WriteComponent } from './routing/routing/components/write/write.component';
import { DeleteComponent } from './routing/routing/components/delete/delete.component';
import { NoPermisionComponent } from './routing/routing/components/no-permision/no-permision.component';

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
    path: 'routing',
    component: RoutingComponent,
    children: [
      { path: 'example-one', component: ExampleOneComponent },
      { path: 'example-two', component: ExampleTwoComponent },
      { path: 'example-with-params', component: ExampleWithParamsComponent },
      {
        path: 'example-with-params/:id',
        component: ExampleWithParamsComponent,
      },
      {
        path: 'lazy-example',
        loadComponent: () =>
          import(
            './routing/routing/components/lazy-example/lazy-example.component'
          ).then((mod) => mod.LazyExampleComponent),
      },
      {
        path: 'guards/read',
        component: ReadComponent,
        canActivate: [readGuard],
      },
      {
        path: 'guards/write',
        component: WriteComponent,
        canActivate: [writeGuard],
      },
      {
        path: 'guards/delete',
        component: DeleteComponent,
        canActivate: [deleteGuard],
      },
      {
        path: 'no-permision',
        component: NoPermisionComponent,
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'parent-child',
  },
];
