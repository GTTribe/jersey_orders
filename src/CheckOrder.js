import React from 'react';
import './CheckOrder.css';
import { useDispatch, useSelector } from 'react-redux';
import { getItemCost } from './store/OrderObject';
import { db } from './firebase';
import { setDoc, doc } from 'firebase/firestore';
import { removeFromCart } from './store/cartSlice';
import { viewPage } from './store/viewpageSlice';

function CheckOrder() {
  const isLoggedIn = useSelector((state) => state.loggedIn.value);
  const userInfo = useSelector((state) => state.user.value);
  const cart = useSelector((state) => state.cart.value);
  const dispatch = useDispatch();

  function getTotals() {
    var total = 0;
    for (let key in cart) {
      for (var item of cart[key]) {
        total += item['item_quantity'];
      }
    }
    return total;
  };

  function getCost() {
    var totalCost = 0;
    for (let key in cart) {
      for (var item of cart[key]) {
        totalCost += getItemCost(item['item_type'], item['item_subtype']) * item['item_quantity'];
      }
    }
    return totalCost;
  };

  async function submitOrder() {
    console.log("Submitting Order!");

    setDoc(doc(db, 'jersey_orders', userInfo['email']), {
      first_name: userInfo['first_name'],
      last_name: userInfo['last_name'],
      email: userInfo['email'],
      pickup_method: userInfo['pickup_method'],
      orderItems: cart,
      total_items: getTotals(),
      total_cost: getCost()
    });
  }

  function handleBack() {
    dispatch(viewPage('home'));
  }

  function handleLogin() {
    dispatch(viewPage('login'));
  }

  return (
    <div>
      <div className='manage-banner'>
        Your Order Information
      </div>
      <div className='not-logged-in'>
        <div className='not-logged-in-content'>
          Store closes February 17th!
        </div>
      </div>
      <div className='item-display'>
        <div className='order-contact-info'>
          {
            isLoggedIn && 
            <div>
              <h2>Order for {userInfo['first_name']} {userInfo['last_name']}</h2>
              <h3>Contact Email</h3>
              <p>{userInfo['email']}</p>
              <h3>Pickup Information</h3>
              <p>{userInfo['pickup_method']}</p>
            </div>
          }
          {
            !isLoggedIn &&
            <div className='not-logged-in'>
              <div className='not-logged-in-content'>
                <h3>Not logged in?</h3>
                <a onClick={() => handleLogin()}>Login</a>
              </div>
            </div>
          }
        </div>
        <div className='order-basket-info'>
          <div className='order-basket-table'>
            <table>
              <tr>
                <th></th>
                <th>Item</th>
                <th>Name</th>
                <th>Number</th>
                <th>Size</th>
                <th>Quantity</th>
              </tr>
              {
                Object.entries(cart).map(([key, value]) => value.map((orderItem) =>
                <tr>
                  <td className='trash-icon'>
                    <div onClick={() => dispatch(removeFromCart([key, orderItem]))}>
                      <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" className='trash-icon'><path d="M7 21q-.825 0-1.412-.587Q5 19.825 5 19V6q-.425 0-.713-.287Q4 5.425 4 5t.287-.713Q4.575 4 5 4h4q0-.425.288-.713Q9.575 3 10 3h4q.425 0 .713.287Q15 3.575 15 4h4q.425 0 .712.287Q20 4.575 20 5t-.288.713Q19.425 6 19 6v13q0 .825-.587 1.413Q17.825 21 17 21ZM7 6v13h10V6Zm2 10q0 .425.288.712Q9.575 17 10 17t.713-.288Q11 16.425 11 16V9q0-.425-.287-.713Q10.425 8 10 8t-.712.287Q9 8.575 9 9Zm4 0q0 .425.288.712.287.288.712.288t.713-.288Q15 16.425 15 16V9q0-.425-.287-.713Q14.425 8 14 8t-.712.287Q13 8.575 13 9ZM7 6v13V6Z"/></svg>
                    </div>
                  </td>
                  <td>{orderItem['item_type']}</td>
                  <td>{orderItem['item_custom_name']}</td>
                  <td>{orderItem['item_custom_number']}</td>
                  <td>{orderItem['item_size']}</td>
                  <td>{orderItem['item_quantity']}</td>  
                </tr>
                ))
              }
            </table>
          </div>
          <div className='order-basket-table'>
            <table>
              <tr>
                <th>Item Count: {getTotals()}</th>
              </tr>
              <tr>
                <th>Total Cost: ${getCost()}</th>
              </tr>
            </table>
          </div>
        </div>
      </div>
      <br/>
      <div className='not-logged-in'>
        <div className='not-logged-in-content'>
          <a className='login no-border' onClick={() => handleBack()}>Continue Shopping</a>
        </div>
      </div>
      {
        isLoggedIn &&
        <div className='update-button'>
          <button type="update" onClick={() => submitOrder()}>Save Order</button>
        </div>
      }
    </div>
  );
}

export default CheckOrder;