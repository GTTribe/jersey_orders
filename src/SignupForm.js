import React from 'react';
import { connect } from 'react-redux';
import { setUser } from './store/userSlice';
import { login } from './store/loggedInSlice';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      pickup_method: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const name = event.target.name;
    var value = event.target.value;

    this.setState({
      [name]: value
    });
  }

  async handleSubmit(event) {
    event.preventDefault();

    console.log("Registering!");

    this.props.setUser({
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      email: this.state.email,
      pickup_method: this.state.pickup_method
    });

    this.props.login();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <p>First Name: <input name='first_name' type='text' value={this.state.first_name} onChange={this.handleChange} placeholder='First Name' required/></p>
        <p>Last Name: <input name='last_name' type='text' value={this.state.last_name} onChange={this.handleChange} placeholder='Last Name' required/></p>
        <p>Email: <input name='email' type='email' value={this.state.email} onChange={this.handleChange} placeholder='i.e. gburdell@gatech.edu' required/></p>
        <p>Pickup Method: <input name='pickup_method' type='text' value={this.state.pickup_method} onChange={this.handleChange} placeholder='i.e. I am in Atlanta/around Tech, I am friends with Tech people, etc. We do not mail stuff to you.' required/></p>
        <input type='submit' value='Register'/>
      </form>
    );
  }
}

export default connect(null, { setUser, login })(SignupForm);