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
    <header className="nav-bar">
      <h1 className="logo">Underhood</h1>
      <div>
        {display}
      </div>
    </header>
  )
}
