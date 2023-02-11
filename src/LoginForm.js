import React from 'react';
import { connect } from 'react-redux';
import { setUser } from './store/userSlice';
import { login } from './store/loggedInSlice';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      last_name: '',
      email: ''
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

    console.log("Loggin In!");

    this.props.setUser({
      first_name: 'Anthony',
      last_name: this.state.last_name,
      email: this.state.email,
      pickup_method: 'Wackamole'
    });

    this.props.login();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <p>Last Name: <input name='last_name' type='text' value={this.state.last_name} onChange={this.handleChange} placeholder='Last Name' required/></p>
        <p>Email: <input name='email' type='email' value={this.state.email} onChange={this.handleChange} placeholder='i.e. gburdell@gatech.edu' required/></p>
        <input type='submit' value='Login'/>
      </form>
    );
  }
}

export default connect(null, { setUser, login })(LoginForm);