import { combineReducers } from 'redux';
import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import storage from 're'




export default combineReducers({

    user: userReducer,
    cart: cartReducer

})