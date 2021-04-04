export const addItemsToCart = (cartItems, cartItemsToAdd) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemsToAdd.id)

    if(existingCartItem){
        console.log
        return cartItems.map(cartItem => cartItem.id === cartItemsToAdd ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem)
    }

    return [...cartItems, {...cartItemsToAdd, quantity: 1} ]

}