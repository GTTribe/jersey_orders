import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { viewPage } from './store/viewpageSlice';

function Donate() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleBack() {
    dispatch(viewPage('home'));
    navigate('/');
  }

  const textCenter = {
    textAlign: 'center'
  };

  return (
    <div className='page-container'>
      <Header/>
      <main>
        <div className='manage-banner'>
          Why Support Us?
        </div>
        <div className='back-button-strip'>
          <div className='back-button' onClick={() => handleBack()}>
            <svg xlmns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path d="m10.875 19.3-6.6-6.6q-.15-.15-.213-.325Q4 12.2 4 12t.062-.375q.063-.175.213-.325l6.6-6.6q.275-.275.687-.288.413-.012.713.288.3.275.313.687.012.413-.288.713L7.4 11h11.175q.425 0 .713.287.287.288.287.713t-.287.712Q19 13 18.575 13H7.4l4.9 4.9q.275.275.288.7.012.425-.288.7-.275.3-.7.3-.425 0-.725-.3Z"></path>
            </svg>
            Back
          </div>
        </div>
        <div className='item-display'>
          <div className='thank-you'>
            <p style={textCenter}>
              The profits from these jersey sales will go towards the running and growing Tech’s Men’s Ultimate Frisbee Team. As Tribe becomes ever more competitive, we’re beginning to travel further to compete against some of the top teams in the nation. These funds go towards costs of bid fees, travel, and lodging for such tournaments, and your support helps ensure the costs of Ultimate aren’t burdensome on our teammates.
            </p>
            <p style={textCenter}>
              However you don't have to buy a jersey to donate to Tribe!
              To donate, simply Venmo <a href='https://venmo.com/u/GTTribe' target='_blank'>@GTTribe</a>.
              Feel free to put your name and any well wishing message in the description so we know who donated!
              If you do not have Venmo, please email us and we will help work out an alternative method to donate.
            </p>
            <p style={textCenter}>              
              Thanks for supporting Tribe!
            </p>
          </div>
        </div>
      </main>
      <Footer/>
    </div>
  );
}

export default Donate;