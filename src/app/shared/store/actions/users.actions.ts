import { createAction, props } from '@ngrx/store';
import { User } from '../../models/user-form-data.model';

export enum ActionTypes {
  AddUser = '[Users] Add User',
  AddUserPoint = '[Users] Add Point',
  RemoveUser = '[Users] Remove User',
  ResetUsers = '[Users] Reset Users',
}

const addUser = createAction(
    ActionTypes.AddUser,
    props<{ payload: Omit<User, 'points' | 'id'> }>()
);

const addUserPoint = createAction(
    ActionTypes.AddUserPoint,
    props<{ id: string }>()
);

const removeUser = createAction(
    ActionTypes.RemoveUser,
    props<{ id: string }>()
);

const resetUsers = createAction(
    ActionTypes.ResetUsers
)

export const userActions = {
    addUser,
    addUserPoint,
    removeUser
}