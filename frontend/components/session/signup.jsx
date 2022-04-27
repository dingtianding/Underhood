import React from 'react';
import { Link, useHistory } from 'react-router-dom';


class Signup extends React.Component {
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
    this.props.signup(this.state)
  }

  demoLogin(e) {
    e.preventDefault();
    this.props.login({email: "1@aa.com", password: "123456"})
}
  renderErrors() {
    let errors=[]
    for(let i=0;i< this.props.errors.length;i++){
        const error = this.props.errors[i];
        if(error === "First name can't be blank"){
            errors.push(
                <li className="error" key={`error-${i}`}>
                    Please enter your first name.
                </li>
            )
        }
        else if(error ==="Last name can't be blank"){
            errors.push(
                <li className="error" key={`error-${i}`}>
                    Please enter your last name.
                </li>
            )
        }
        else if(error ==="Password is too short (minimum is 6 characters)")
        {
            errors.push(
                <li className="error" key={`error-${i}`}>
                    Your password must be at least 6 characters.
                </li>
            )
        }
        else if(error === "Email can't be blank"){
            errors.push(
                <li className="error" key={`error-${i}`}>
                    Please enter your email.
                </li>
            )
        }
        else{
            errors.push(
                <li className="error" key={`error-${i}`}>
                    {error}
                </li>
            )
        }
    }
    return (
        <ul>
            {errors}
        </ul>
    );
}
  render() {

    return (
        <div className="signup-page">
            <div width="50%" className="signup-page-description">
                    <h1>Create your login</h1>
                    <p>We'll need your name, email address, and a unique password. You'll use this login to access Robinhood next time.</p>
            </div>
            
            <div className="signup-form">
                <h2>Enter your first and last name as they appear on your government ID.</h2>
                
                <form width="50%">
                    <div className="name-form">
                        <input placeholder="First Name" onChange={this.handleInput('first_name')} type="text" value={this.state.first_name} />
                    <br />
                        <input placeholder="Last Name" onChange={this.handleInput('last_name')} type="text" value={this.state.last_name} />
                    </div>
                    <br />
                        <label>
                            <input className="signup-input" placeholder="Email Address" onChange={this.handleInput('email')} type="text" value={this.state.email} />
                        </label>
                        <label>
                        <input className="signup-input" placeholder="Password (min. 6 characters)" onChange={this.handleInput('password')} type="password" value={this.state.password} />
                        </label>
                        <p className="log-in">Already started? 
                        <br />
                        <Link to="/login">Log in to complete your application.,</Link></p>
                        <br />
                        <button className="signup-button-form"onClick={this.handleSubmit}>Continue</button>
                        <button className="demo-button" onClick={this.demoLogin}>Demo Login</button>
                        <br/>
                        {this.renderErrors()}
                </form>
            </div>
        </div>
            
    );
  }
}

export default Signup;
