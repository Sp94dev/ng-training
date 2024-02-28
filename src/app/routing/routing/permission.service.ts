import { Injectable, signal } from '@angular/core';

export type Permission = 'read' | 'write' | 'delete';

@Injectable({
  providedIn: 'root',
})
export class PermissionService {
  private _permission = signal<Permission[]>([]);

  permision = this._permission.asReadonly();

  addPermision(permission: Permission) {
    this._permission.update((permissions) => {
      return [...new Set([...permissions, permission])];
    });
  }

  removePermision(permission: Permission) {
    this._permission.update((permissions) => {
      return permissions.filter((_permission) => permission !== _permission);
    });
  }
}
