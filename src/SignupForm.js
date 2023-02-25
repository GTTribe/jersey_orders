import React from 'react';
import { connect } from 'react-redux';
import { setUser } from './store/userSlice';
import { login } from './store/loggedInSlice';
import { setError } from './store/errorSlice';
import { db } from './firebase';
import { setDoc, doc, getDoc } from 'firebase/firestore';
import { capFirst } from './store/OrderObject';

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

    const target_email = this.state.email.toLowerCase();
    const target_last_name = this.state.last_name.toLowerCase();
    const docRef = doc(db, 'jersey_orders', target_email);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      this.props.setError('Order exists! Please login.');
      return;
    }

    console.log("Registering!");

    setDoc(doc(db, 'jersey_orders', this.state.email.toLowerCase()), {
      first_name: capFirst(this.state.first_name),
      last_name: capFirst(this.state.last_name),
      email: this.state.email.toLowerCase(),
      pickup_method: this.state.pickup_method
    })

    this.props.setUser({
      first_name: capFirst(this.state.first_name),
      last_name: capFirst(this.state.last_name),
      email: this.state.email.toLowerCase(),
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
        <p>Pickup Method: <input name='pickup_method' type='text' value={this.state.pickup_method} onChange={this.handleChange} placeholder='i.e. I am in Atlanta/around Tech, I am friends with Tech people, etc. We can arrange to mail stuff to you in the US.' required/></p>
        <input type='submit' value='Register'/>
      </form>
    );
  }
}

export default connect(null, { setUser, login, setError })(SignupForm);