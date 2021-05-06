import { CartActionTypes } from './cart.types';
import { addItemsToCart } from './cart.utils';


const INITIAL_STATE = {
    hidden: true,
    cartItems: []
}

const cartReducer = (state= INITIAL_STATE, action) => {
    switch(action.type){
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return { ...state, hidden: !state.hidden }
        
        case CartActionTypes.ADD_ITEM:
            return {
                ...state,
                cartItems: addItemsToCart(state.cartItems, action.payload)
            }
        case CartActionTypes.CLEAR_ITEM_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter(cartItem => cartItem.id !== action.payload.id)
            }
        
        case CartActionTypes.REMOVE_ITEM:
            return {
                ...state,
                cartItems: [...state.cartItem, quantity: action.payload.qu]
            }
            
        default:
            return state;
    }
}

export default cartReducer;