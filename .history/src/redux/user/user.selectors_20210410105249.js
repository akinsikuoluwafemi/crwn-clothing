import { createSelector } from 'reselect';

const selectUser = state => state.user;

const selectCart = state => state.cart;


export const selectCurrentUser = createSelector(
    [selectUser, select],
    (user, cart) => user.currentUser

);