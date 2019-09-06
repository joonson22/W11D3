import { RECEIVE_ERRORS, RECEIVE_CURRENT_USER } from '../actions/session_actions';

const sessionErrorReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ERRORS:
      return Object.assign([], { errors: action.errors });
    case RECEIVE_CURRENT_USER:
      return Object.assign([], state, { errors: [] }); /// look here for errors!!! bleep
    default:
      return state;
  }
};

export default sessionErrorReducer;