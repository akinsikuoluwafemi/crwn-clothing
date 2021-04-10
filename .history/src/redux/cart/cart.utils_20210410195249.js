
export const addItemsToCart = (cartItems, cartItemsToAdd) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemsToAdd.id)

    if(existingCartItem){
        return cartItems.map(cartItem => cartItem.id === cartItemsToAdd.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem)
    }

    return [...cartItems, {...cartItemsToAdd, quantity: 1} ]

}

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(cart)
}