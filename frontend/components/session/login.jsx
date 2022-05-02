import React from 'react';
import { Link, useHistory } from 'react-router-dom';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.login(this.state)
      .then(() => this.props.history.push(''));
  }
  renderErrors() {
    return (
        <ul>
            {this.props.errors.map((error, i) => (
                <li className="error" key={`error-${i}`}>
                    {error}
                </li>
            ))}
        </ul>
    );
}
  componentDidMount(){
        this.props.clearErrors();
  }
  
  demoLogin(e) {
      e.preventDefault();
      this.props.login({email: "1@aa.com", password: "123456"})
  }

  render() {
        return (
          <div className="login-page">
            <div className="login-img">
              <img src="https://cdn.robinhood.com/assets/generated_assets/632fcb3e7ed928b2a960f3e003d10b44.jpg" />
            </div>
            <div className="login-form-container">
              <form className="login-form">
              <h2>Log in to Underhood</h2>

                <label>Email
                <input
                  type="text"
                  value={this.state.email}
                  onChange={this.handleInput('email')}
                />
                </label>

                <label>Password
                <input
                  type="password"
                  value={this.state.password}
                  onChange={this.handleInput('password')}
                />
                </label>
                {this.renderErrors()}
                <br/>

                <button className="signin-button-form" onClick={this.handleSubmit}>Log In</button>
                <button className="demo-button" onClick={this.demoLogin}>Demo Login</button>
                <br/>
                <br/>
                <p id="sign-up">Not on Underhood? <Link to="/signup">Create an account.</Link></p>
              </form>
          </div>
      </div>
    );
  }
}

export default Login;
