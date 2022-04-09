import { createReducer, on } from '@ngrx/store';
import { User } from '../../models/user-form-data.model';
import * as UserForm from '../actions/users.actions';
import { v4 as uuid } from 'uuid';
import { state } from '@angular/animations';

export interface UsersState {
  users: User[];
}

const defaultState: UsersState = {
  users: [],
};

export const usersReducer = createReducer(
  // Add a user
  defaultState,
  on(UserForm.userActions.addUser, (state, { payload }) => {
    const user: User = {
      ...payload,
      id: uuid(),
      points: 0,
    };

    return {
      ...state,
      users: [...state.users, user],
    };
  }),

  on(UserForm.userActions.addUserPoint, (state, { id }) => {
    const clonedUsers = [...state.users];
    const userIndex = clonedUsers.findIndex(x => x.id === id);
    const user = clonedUsers[userIndex];
    
    clonedUsers[userIndex] = {
      ...user,
      points: user.points + 1
    }
    
    return {
      ...state,
      users: clonedUsers
    }
  }),

  // Remove a user
  on(UserForm.userActions.removeUser, (state, { id }) => {
    return {
      ...state,
      users: [
        ...state.users.filter((user) => {
          return user.id != id;
        }),
      ],
    };
  })
);
