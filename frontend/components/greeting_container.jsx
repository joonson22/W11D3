import { logoutUser } from '../actions/session_actions';

import {connect} from 'react-redux';
import React from 'react';
import Greeting from './greeting';
console.log('im here')


const mapStateToProps = (state) => ({
  current_user: state.session.current_user,
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logoutUser())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Greeting);
