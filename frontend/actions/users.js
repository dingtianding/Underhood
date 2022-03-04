import * as APIUtil from '../utils/user.js';

export const SET_CURRENT_USER = "SET_CURRENT_USER";

export const receiveCurrentUser = currentUser => {
    return(
        {
            type: SET_CURRENT_USER,
            currentUser
        }
    )
};

export const getCurrentUser = userId => dispatch => {
    return(
        APIUtil.getCurrentUser(userId).then(user => dispatch(receiveCurrentUser(user)))
    )
}

export const editCurrentUser = user => dispatch =>{
    return(
        APIUtil.editCurrentUser(user).then(user => dispatch(receiveCurrentUser(user)))
    )
}