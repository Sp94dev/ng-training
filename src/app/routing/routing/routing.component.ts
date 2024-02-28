import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PermissionService } from './permission.service';

@Component({
  selector: 'app-routing',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `<div class="container">
    <h4 class="text-center text-xl font-semibold">Routing stuff</h4>
    <div class="flex justify-center w-full mt-4 gap-2">
      <button routerLink="example-one" class="btn">example one</button>
      <button routerLink="example-two" class="btn">example two</button>
      <button routerLink="example-with-params" class="btn">
        example with params
      </button>
      <button routerLink="lazy-example" class="btn">lazy example</button>
    </div>
    <div class="flex justify-center gap-2 mt-2">
      <button routerLink="guards/read" class="btn ">open read</button>
      <button routerLink="guards/write" class="btn ">open write</button>
      <button routerLink="guards/delete" class="btn ">open delete</button>
    </div>
    <div class="my-4">
      <p class="text-center">Add permision</p>

      <div class="flex justify-center gap-2 mt-2">
        <button
          (click)="permissionService.addPermision('read')"
          class="btn bg-yellow-200"
        >
          read
        </button>
        <button
          (click)="permissionService.addPermision('write')"
          class="btn bg-green-200"
        >
          write
        </button>
        <button
          (click)="permissionService.addPermision('delete')"
          class="btn bg-red-200"
        >
          delete
        </button>
      </div>
    </div>
    <div class="my-4">
      <p class="text-center">Remove permision</p>

      <div class="flex justify-center gap-2 mt-2">
        <button
          (click)="permissionService.removePermision('read')"
          class="btn bg-yellow-200"
        >
          read
        </button>
        <button
          (click)="permissionService.removePermision('write')"
          class="btn bg-green-200"
        >
          write
        </button>
        <button
          (click)="permissionService.removePermision('delete')"
          class="btn bg-red-200"
        >
          delete
        </button>
      </div>
      <p class="text-center">{{ permissionService.permision() | json }}</p>
    </div>
    <div
      class="container size-96 flex items-center justify-center bg-slate-50 mt-4"
    >
      <router-outlet></router-outlet>
    </div>
  </div>`,
  styleUrl: './routing.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RoutingComponent {
  permissionService = inject(PermissionService);
}
