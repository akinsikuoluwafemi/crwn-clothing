const INITIAL_STATE = {
    current_user:null
}   

const userReducer = (state=INITIAL_STATE, action) => {
    switch(action.type){
        case 'SET_CURRENT_USER':
            return {
                ...state,
                currentUser: action.payload
            }
        default:
            return state;
    }
}
