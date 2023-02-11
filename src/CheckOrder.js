import React from 'react';
import Footer from './Footer';
import Header from './Header';
import { Link } from 'react-router-dom';
import './CheckOrder.css';

function CheckOrder() {
  return (
    <div className='page-container'>
      <Header/>
      <main>
        <div className='manage-banner'>
          Your Order Information
        </div>
        <div className='back-button-strip'>
          <Link to='/'>
            <div className='back-button'>
              <svg xlmns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="m10.875 19.3-6.6-6.6q-.15-.15-.213-.325Q4 12.2 4 12t.062-.375q.063-.175.213-.325l6.6-6.6q.275-.275.687-.288.413-.012.713.288.3.275.313.687.012.413-.288.713L7.4 11h11.175q.425 0 .713.287.287.288.287.713t-.287.712Q19 13 18.575 13H7.4l4.9 4.9q.275.275.288.7.012.425-.288.7-.275.3-.7.3-.425 0-.725-.3Z"></path>
              </svg>
              Back
            </div>
          </Link>
        </div>
        <div className='item-display'>
          <div className='order-contact-info'>
            <h2>Order for Anthony Jacobs</h2>
            <h3>Contact Email</h3>
            <p>gburdell@gatech.edu</p>
            <h3>Pickup Information</h3>
            <p>I am near Georgia Tech</p>
            <h3>Order Code</h3>
            <p>ATCQJ</p>
          </div>
          <div className='order-basket-info'>
            <div className='order-basket-table'>
              <table>
                <tr>
                  <th>Item</th>
                  <th>Name</th>
                  <th>Number</th>
                  <th>Size</th>
                  <th>Quantity</th>
                </tr>
                <tr>
                  <td>Long Sleeve Blue</td>
                  <td>Burdell</td>
                  <td>21</td>
                  <td>Mens XS</td>
                  <td>2</td>  
                </tr>
              </table>
            </div>
            <div className='order-basket-table'>
              <table>
                <tr>
                  <th>Total:</th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th>2</th>
                </tr>
              </table>
            </div>
          </div>
        </div>
        <br/>
        <div className='item-display'>
          Update Order Button
        </div>
      </main>
      <Footer/>
    </div>
  );
}

export default CheckOrder;