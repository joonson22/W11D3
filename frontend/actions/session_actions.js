export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS'
import {signup, login, logout} from '../util/session_api_util'

export const receiverCurrentUser = (user) => ({
  type: RECEIVE_CURRENT_USER,
  user
});

export const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER,
});

export const receiveErrors = (errors=[]) => ({
  type: RECEIVE_ERRORS,
  errors
});

export const signupUser = (user) => dispatch => signup(user)
  .then(user => dispatch(receiverCurrentUser(user)));

export const loginUser = (user) => dispatch => login(user)
  .then(user => dispatch(receiverCurrentUser(user)));

export const logoutUser = () => dispatch => logout()
  .then( () => dispatch(logoutCurrentUser()));


