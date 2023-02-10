import React from 'react';
import Footer from './Footer';
import Header from './Header';

function CheckOrder() {
  return (
    <div className='page-container'>
      <Header/>
      <main>
        Here is where you can input your code and check that your order information.
      </main>
      <Footer/>
    </div>
  );
}

export default CheckOrder;