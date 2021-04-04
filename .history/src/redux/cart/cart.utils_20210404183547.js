export const addItemsToCart = (cartItems, cartItemsToAdd) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemsToAdd.id)

    if(existingCartItem){
        return cartItems.map(cartItem => cartItem.id === cartItemsToAdd ? {} )
    }

}