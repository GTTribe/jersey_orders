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
              The profits from these jersey sales will go towards the running and growing Tech’s Men’s Ultimate Frisbee Team. As Tribe becomes ever more competitive, we’re beginning to travel further to compete against some of the top teams in the nation. These funds go towards costs of bid fees, travel, and lodging for such tournaments, and your support helps ensure the costs of Ultimate aren’t burdensome on our teammates.
            </p>
            <p style={textCenter}>
              If you are ready to pay for your order, simply Venmo <a href='https://venmo.com/u/GTTribe' target='_blank'>@GTTribe</a>.
              Make sure you put your name and order info in the description so we know who paid!
              If you do not have Venmo, please email us and we will help work out an alternative method of payment.
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
          <a className='team-logo' href='https://gttribe.github.io'>
            <img src={logo} className='team-logo' alt='logo'/>
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;