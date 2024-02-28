import { Router, type CanActivateFn } from '@angular/router';
import { PermissionService } from './permission.service';
import { inject } from '@angular/core';

export const readGuard: CanActivateFn = (route, state) => {
  return (
    inject(PermissionService).permision().includes('read') ||
    inject(Router).navigate(['/routing/no-permision'])
  );
};

export const writeGuard: CanActivateFn = (route, state) => {
  return (
    inject(PermissionService).permision().includes('write') ||
    inject(Router).navigate(['/routing/no-permision'])
  );
};

export const deleteGuard: CanActivateFn = (route, state) => {
  return (
    inject(PermissionService).permision().includes('delete') ||
    inject(Router).navigate(['/routing/no-permision'])
  );
};
