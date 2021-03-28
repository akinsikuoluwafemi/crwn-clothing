

export const setCurrentUser = user => {
    console.log('firing actions')
    return {
        type: 'SET_CURRENT_USER',
        payload: user
    }
}