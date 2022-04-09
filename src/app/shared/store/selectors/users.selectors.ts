import { createFeatureSelector, createSelector } from "@ngrx/store";
import { UsersState } from "../reducers/users.reducer";

const selectUsersState = createFeatureSelector<UsersState>('usersState');

const selectUsers = createSelector(selectUsersState, (state) => state.users);

export const UserSelectors = {
    users: selectUsers
}