import { combineReducers } from 'redux';
import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import storage from 'redux-persist/li'




export default combineReducers({

    user: userReducer,
    cart: cartReducer

})