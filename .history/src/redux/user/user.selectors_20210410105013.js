import { createSelector } from 'reselect';

const selectUser = state => state.user;

export const selectaCurrentUser = createSelector(
    []
)