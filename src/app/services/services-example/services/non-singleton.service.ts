import { Injectable, signal } from '@angular/core';

interface User {
  name: string;
  surname: string;
}

@Injectable()
export class NonSingletonService {
  private _user = signal<User>({
    name: 'John',
    surname: 'Smith',
  });

  public user = this._user.asReadonly();

  constructor() {}

  setUser(name: string) {
    this._user.update((user) => ({ ...user, name }));
  }
}
