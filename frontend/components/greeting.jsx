import React from 'react';
import { logout } from '../util/session_api_util';
import { Link } from 'react-router-dom';

export default ({current_user, logout}) => {
  return (
    
  <div>
      {current_user ? (
        <div>
          <h1>Welcome {current_user.username}</h1>
          <button onClick={logout}>Sign Out</button>
        </div>
        ) 
      : (
        <div>
          <Link to='/signup'>Sign Up</Link>
          <Link to='/login'>Sign In</Link>
        </div>
      )
      }
  </div>
  )
}