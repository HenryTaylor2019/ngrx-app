import { Injectable } from '@angular/core';
import { Action, Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { User } from '../models/user-form-data.model';
import { UsersState } from '../store/reducers/users.reducer';
import { UserSelectors } from '../store/selectors/users.selectors';

@Injectable({ providedIn: 'root' })
export class UserFacadeService {
  constructor(private store: Store<UsersState>) {}

  dispatch(action: Action): void {
    return this.store.dispatch(action);
  }

  getUsers(): Observable<User[]> {
    return this.store.select(UserSelectors.users);
  }

  getUsersOrderedByPoints(): Observable<User[]> {
    return this.store.select(UserSelectors.users).pipe(
      map((users) => [...users].sort((a, b) => b.points - a.points))
    );
  }
}
