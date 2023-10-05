import React from 'react';
import Footer from './Footer';
import Header from './Header';
import { useDispatch, useSelector } from 'react-redux';
import { reset } from './store/viewitemSlice';
import { clearItem } from './store/itemProofSlice';
import './ViewItem.css';
import ItemOrderForm from './ItemOrderForm';
import { viewPage } from './store/viewpageSlice';
import { useNavigate } from 'react-router-dom';

function ItemCosts(itemName) {
  switch (itemName) {
    case "Black Short Sleeve":
    case "Blue Short Sleeve":
    case "Light Short Sleeve":
      return 36;
    case "Black Long Sleeve":
    case "Blue Long Sleeve":
    case "Light Long Sleeve":
      return 38;
    case "Sun Hoodie":
      return 47;
    case "Shorts":
      return 34;
    default:
      return null;
  }
}

function ViewItem() {
  const dispatch = useDispatch();
  const itemName = useSelector((state) => state.viewitem.value);
  const itemProof = useSelector((state) => state.itemproof.value);
  const itemCost = ItemCosts(itemName);
  const navigate = useNavigate();

  function handleBack() {
    dispatch(reset());
    dispatch(clearItem());
    dispatch(viewPage('home'));
    navigate('/');
  }

  function handleSizing() {
    dispatch(viewPage('sizing'));
    navigate('/size_chart');    
  }

  return (
    <div className='page-container'>
      <Header/>
      <main>
        <div className='item-banner'>
          {itemName}
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
          <div className='item-image-box'>
            <img src={itemProof}/>
          </div>
          <div className='item-description-box'>
            <h1 className='item-display-cost'>{ itemName === "Shorts" && "From "}${itemCost}</h1>
            {/* <ItemOrderForm item_type={itemName} handle_sizing={handleSizing}/> */}
          </div>
        </div>
      </main>
      <Footer/>
    </div>
  );
}

export default ViewItem;