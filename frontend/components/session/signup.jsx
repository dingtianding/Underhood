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
    // console.log(this.props);
    return (
      <div className="session-form">
        <h2>Enter your first and last name as they appear on your government ID.</h2>
        
        <form>
            <div className="signup-names">
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
                <p id="log-in">Already started? <Link to="/login">Log in to complete your application.,</Link></p>
                <br />
                <button onClick={this.handleSubmit}>Continue</button>
                <br/>
                {this.renderErrors()}
        </form>
      </div>
    );
  }
}

export default Signup;
