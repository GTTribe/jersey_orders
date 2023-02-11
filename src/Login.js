import React from 'react';
import { useSelector } from 'react-redux';
import Footer from './Footer';
import Header from './Header';
import LoginForm from './LoginForm';
import { Link, Navigate } from 'react-router-dom';

function Login() {
  const isLoggedIn = useSelector((state) => state.loggedIn.value);

  return (
    <div className='page-container'>
      { isLoggedIn && <Navigate to='/'/>}
      <Header/>
      <main>
        <div className='manage-banner'>
          Login
        </div>
        <div>
          <div className='item-display'>
            <div className='login-box'>
              <LoginForm/>
              <div>
                <br/>
                <h5>Don't have an account yet? <Link to='/register'>Register</Link></h5>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer/>
    </div>
  );
}

export default Login;