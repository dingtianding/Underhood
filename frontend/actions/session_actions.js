import * as SessionApiUtil from '../util/session_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

const receiveCurrentUser = user => ({
  type: RECEIVE_CURRENT_USER,
  user,
});

const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER,
});
const receiveErrors = (errors) => { 
  return {
    type: RECEIVE_SESSION_ERRORS,
    errors: errors
  }
};

export const clearErrors = ()=>({
  type: CLEAR_ERRORS
})

export const signup = user => dispatch => SessionApiUtil.postUser(user)
  .then(user => (dispatch(receiveCurrentUser(user))),
  err => dispatch(receiveErrors(err.responseJSON)

  ));

export const login = user => dispatch => (
  SessionApiUtil.postSession(user).then(user => (
      dispatch(receiveCurrentUser(user)))
      , err => dispatch(receiveErrors(err.responseJSON))
    )
);

export const logout = () => dispatch => SessionApiUtil.deleteSession()
  .then(() => dispatch(logoutCurrentUser()));

export const addFunds = (userId, amount) => dispatch => {
  return SessionApiUtil.addFunds(userId, amount)
    .then(user => dispatch(receiveCurrentUser(user)))
    .fail(errors => dispatch(receiveErrors(errors.responseJSON)))
}  