import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import SignupForm from './SignupForm';
import { clearError } from './store/errorSlice';
import { viewPage } from './store/viewpageSlice';

function Signup() {
  const isLoggedIn = useSelector((state) => state.loggedIn.value);
  const errorMsg = useSelector((state) => state.error.value);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (isLoggedIn) {
    dispatch(clearError());
    dispatch(viewPage('home'));
    navigate('/');
  }

  function handleLogin() {
    dispatch(viewPage('login'));
    navigate('/login');
  }

  return (
    <div className='page-container'>
      <Header/>
      <main>
        <div className='manage-banner'>
          Register
        </div>
        <div className='not-logged-in'>
          <div className='not-logged-in-content'>
            {errorMsg}
          </div>
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
      </main>
      <Footer/>
    </div>
  );
}

export default Signup;