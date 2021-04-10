import { createSelector } from 'reselect';

const selectUser = state => state.user;

const selectC

export const selectCurrentUser = createSelector(
    [selectUser],
    (user) => user.currentUser

);