import { createSelector } from 'reselect';

const selectCart = state => state.cart;



export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems
);

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cart
	cartItems.reduce((acc, item) => acc + item.quantity, 0)
);