import React from 'react';
import { BrowserRouter as Link } from 'react-router-dom';
// import GoogleLogin from 'react-google-login';

import './Signup.scss';
class Signup extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };

    this.handleChange = this.handleChange.bind(this);
    console.log('Handle Changes on Fields');
    this.handleSubmit = this.handleSubmit.bind(this);
    console.log('Handle Changes on Submit');
  }

  handleChange (event) {
    this.setState({email: event.target.email,
      password: event.target.password});
    console.log('setState');
  }

  handleSubmit (event) {
    console.log('The email is:' + this.state.email);
    console.log('The password is:' + this.state.password);
    console.log('handle submit event triggered');
    event.preventDefault();
  }
  render () {
    console.log('Entered render');
    return (
      <div className='row'>
        <div className='col-md-4 offset-md-4'>
          <h3 className='heading'> Login / Signup </h3>
          <form onSubmit={this.handleSubmit}>
            <div className='form-group'>
              <label htmlFor='username' value={this.state.email}>Email address:</label>
              <input type='email' className='form-control' id='email' onChange={this.handleChange} />
            </div>
            <div className='form-group'>
              <label htmlFor='pwd' value={this.state.password} >Password:</label>
              <input type='password' className='form-control' id='pwd' onChange={this.handleChange} />
            </div>
            <button type='submit' value='Submit' className='signup-button btn btn-primary'>
              <Link to={`signup`} className='link-text'>
                <p>This is akila</p>
              </Link>
            </button>
            // <button type='submit' value='Submit' className='btn btn-danger login-button'><a href='/login' className='link-text'>Login</a></button>
          </form>
        </div>
      </div>
    );
  }
}
export default Signup;
