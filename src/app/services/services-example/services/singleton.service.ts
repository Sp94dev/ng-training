import { Injectable, inject, signal } from '@angular/core';
import { NonSingletonService } from './non-singleton.service';

interface User {
  name: string;
  surname: string;
}

@Injectable({
  providedIn: 'root',
})
export class SingletonService {
  private _user: User = {
    name: 'John',
    surname: 'Smith',
  };

  tester = signal('przed');
  constructor() {}

  getUser() {
    return this._user;
  }

  setUser(name: string) {
    this._user = {
      ...this._user,
      name,
    };
    return this._user;
  }
}
