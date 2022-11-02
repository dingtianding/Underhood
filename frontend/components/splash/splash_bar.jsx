import React from 'react';
import { Link } from 'react-router-dom';

export default ({ currentUser, logout }) => {
const display = currentUser ? (
    <div>
      <h3>Welcome {currentUser.first_name}!</h3>
      <button onClick={logout}>Logout</button>
    </div>
  ) : (
    <div>
      <Link className="login-btn" to="/login">Log In</Link>
      <Link className="signup-btn" to="/signup">Sign Up</Link>
    </div>
  );
  return (
    <header className="splash-nav">
      <div className="logo">
        <h1 className="logo-text">Underhood</h1> 
        <img src={'https://aa-underhood.s3.us-east-2.amazonaws.com/logo-feather.png'} className='splash-feather'/>
      </div>
      <div>
        {display}
      </div>
    </header>
  )
}
