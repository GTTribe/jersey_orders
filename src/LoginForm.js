import React from 'react';
import { connect } from 'react-redux';
import { setUser } from './store/userSlice';
import { login } from './store/loggedInSlice';
import { setError } from './store/errorSlice';
import { initCart } from './store/cartSlice';
import { db } from './firebase';
import { doc, getDoc } from 'firebase/firestore';
import { capFirst } from './store/OrderObject';

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

    const target_email = this.state.email.toLowerCase();
    const target_last_name = this.state.last_name.toLowerCase();
    const docRef = doc(db, 'jersey_orders', target_email);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const db_last_name = docSnap.data().last_name.toLowerCase();
      if (db_last_name !== target_last_name) {
        this.props.setError('Invalid username/password!');
        return;
      }
    } else {
      this.props.setError('Invalid username/password!');
      return;
    }

    console.log("Logging In!");

    this.props.setUser({
      first_name: capFirst(docSnap.data().first_name),
      last_name: capFirst(docSnap.data().last_name),
      email: target_email,
      pickup_method: docSnap.data().pickup_method
    });

    this.props.initCart(docSnap.data().orderItems);

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

export default connect(null, { setUser, login, setError, initCart })(LoginForm);