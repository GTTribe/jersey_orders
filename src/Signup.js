import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SignupForm from './SignupForm';
import { viewPage } from './store/viewpageSlice';

function Signup() {
  const isLoggedIn = useSelector((state) => state.loggedIn.value);
  const dispatch = useDispatch();

  if (isLoggedIn) {
    dispatch(viewPage('home'));
  }

  function handleLogin() {
    dispatch(viewPage('login'));
  }

  return (
    <div>
      <div className='manage-banner'>
        Register
      </div>
      <div>
        <div className='update-button'>
          <div className='login-box'>
            <SignupForm/>
            <div>
              <br/>
              <h5>Already have an account? <a onClick={() => handleLogin()}>Login</a></h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;