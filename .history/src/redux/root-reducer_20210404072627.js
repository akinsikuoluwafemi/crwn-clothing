import { combineReducers } from 'redux';
import userReducer from './user/user.reducer';
import cartReducer from './'




export default combineReducers({

    user: userReducer

})