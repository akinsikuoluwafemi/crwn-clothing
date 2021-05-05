import { combineReducers } from 'redux';
import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';
import directoryReducer from './directory/directory.reducer';
import shopReducer from '.'


const persistConfig = {
    key: 'root',
    storage,
    whiteList: ['cart']
}


const rootReducer = combineReducers({

    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer

})

export default persistReducer(persistConfig, rootReducer);