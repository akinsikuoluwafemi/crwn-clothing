import { CartActionTypes } from './cart.actions';

const INITIAL_STATE = {
    hidden: true
}

const cartReducer = (state= INITIAL_STATE, action) => {
    switch(action.type){
        case Cart TOGGLE_CART_HIDDEN:
        return {...state, hidden: !state.hidden}
            
        default:
            return state;
    }
}