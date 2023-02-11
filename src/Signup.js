import React from 'react';
import { useSelector } from 'react-redux';
import Footer from './Footer';
import Header from './Header';
import SignupForm from './SignupForm';
import { Link, Navigate } from 'react-router-dom';

function Signup() {
  const isLoggedIn = useSelector((state) => state.loggedIn.value);

  return (
    <div className='page-container'>
      { isLoggedIn && <Navigate to='/'/>}
      <Header/>
      <main>
        <div className='manage-banner'>
          Register
        </div>
        <div>
          <div className='item-display'>
            <div className='login-box'>
              <SignupForm/>
              <div>
                <br/>
                <h5>Already have an account? <Link to='/login'>Login</Link></h5>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer/>
    </div>
  );
}

export default Signup;