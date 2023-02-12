import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LoginForm from './LoginForm';
import { Link } from 'react-router-dom';
import { viewPage } from './store/viewpageSlice';
import { clearError } from './store/errorSlice';

function Login() {
  const isLoggedIn = useSelector((state) => state.loggedIn.value);
  const errorMsg = useSelector((state) => state.error.value);
  const dispatch = useDispatch();

  if (isLoggedIn) {
    dispatch(clearError());
    dispatch(viewPage('checkout'));
  }

  function handleRegister() {
    dispatch(viewPage('register'));
  }


  return (
    <div>
      <div className='manage-banner'>
        Login
      </div>
      <div className='not-logged-in'>
        <div className='not-logged-in-content'>
          {errorMsg}
        </div>
      </div>
      <div>
        <div className='update-button'>
          <div className='login-box'>
            <LoginForm/>
            <div>
              <br/>
              <h5>Don't have an account yet? <a onClick={() => handleRegister()}>Register</a></h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;