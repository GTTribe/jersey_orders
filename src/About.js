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
          About
        </div>
        <div>
          <div className='item-display'>
            <div className='login-box'>
              <p style={textCenter}>This order website was completed on 2/12/2023 by Raymond.
                Made with GitHub Pages, React, and Firestore,
                this website was made out of hatred for Google Forms and with inspiration
                from Tribe alum Miguel. As always, thank you to all of the support from 
                Tribe's friends and family; without all of you, none of this would be possible.
                Cheers to a great 2023 season and best of luck to those of you who stumble upon
                this page!
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