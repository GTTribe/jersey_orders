import React from 'react';
import Footer from './Footer';
import Header from './Header';
import sizingChart from './Size Chart 2020.jpg';

function Sizing() {
  const fixBorder = {
    borderRadius: '0'
  };

  return (
    <div className='page-container'>
      <Header/>
      <main>
        <div>
          <img style={fixBorder} src={sizingChart}></img>
        </div>
      </main>
      <Footer/>
    </div>
  );
}

export default Sizing;