import React from 'react';
import logo from './GeorgiaTechTribeLogo.PNG';

function About() {
  const textCenter = {
    textAlign: 'center'
  };

  return (
    <div>
      <br/>
      <div className='manage-banner'>
        Thank You!
      </div>
      <div>
        <div className='item-display'>
          <div className='thank-you'>
            <p style={textCenter}>
              Thank you for submitting an order!
              If you made a mistake or want to adjust your order, you can always log back in with your email and last name and update your order by submitting again.
              If you would like to cancel your order, please email <a href='mailto:gtmensultimate@gmail.com' target='_blank'>gtmensultimate@gmail.com</a>.
            </p>
            <p style={textCenter}>
              If you are ready to pay for your order, simply Venmo <a href='https://venmo.com/u/GTTribe' target='_blank'>@GTTribe</a>.
              The payment deadline is <b>March 1st, 2023</b> and we'll send you a confirmation email of your order once you've paid.
              As always feel free to donate extra if you are feeling philanthropic! Thanks for supporting Tribe!
            </p>
            <p style={textCenter}>
              Thanks for supporting Tribe!
            </p>
            <p style={textCenter}>
              -- Tribe 2022-23
            </p>
          </div>
        </div>
      </div>
      <div className='not-logged-in'>
        <div className='not-logged-in-content'>
          <img src={logo} className='team-logo' alt='logo'/>
        </div>
      </div>
    </div>
  );
}

export default About;