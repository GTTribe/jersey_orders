import React from 'react';
import Footer from './Footer';
import Header from './Header';

function About() {
  const textCenter = {
    textAlign: 'center'
  };

  return (
    <div className='page-container'>
      <Header/>
      <main>
        <div className='manage-banner'>
          Thank You!
        </div>
        <div>
          <div className='item-display'>
            <div className='login-box'>
              <p style={textCenter}>Follow up instrutions go here.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer/>
    </div>
  );
}

export default About;