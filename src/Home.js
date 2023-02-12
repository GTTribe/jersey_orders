import React, { useState, useEffect } from 'react';
import Header from './Header';
import './manage.css';
import BluePreview from './previews/BluePreview.png';
import BlackPreview from './previews/BlackPreview.png';
import LightPreview from './previews/LightPreview.png';
import SunHoodiePreview from './previews/SunHoodiePreview.png';
import ShortsPreview from './previews/ShortsPreview.png';
import BlueLongSleeveProof from './proofs/BlueLongSleeveProof.png';
import BlueShortSleeveProof from './proofs/BlueShortSleeveProof.png';
import BlackLongSleeveProof from './proofs/BlackLongSleeveProof.png';
import BlackShortSleeveProof from './proofs/BlackShortSleeveProof.png';
import LightLongSleeveProof from './proofs/LightLongSleeveProof.png';
import LightShortSleeveProof from './proofs/LightShortSleeveProof.png';
import SunHoodieProof from './proofs/SunHoodieProof.png';
import ShortsProof from './proofs/ShortsProof.png';
import Footer from './Footer';
import { useDispatch, useSelector } from 'react-redux';
import { view } from './store/viewitemSlice';
import { setItem, clearItem } from './store/itemProofSlice';
import ViewItem from './ViewItem';
import { viewPage } from './store/viewpageSlice';
import CheckOrder from './CheckOrder';
import Sizing from './Sizing';
import Login from './Login';
import Signup from './Signup';
import Thanks from './Thanks';

function ItemCosts(itemName) {
  switch (itemName) {
    case "Black Short Sleeve":
    case "Blue Short Sleeve":
    case "Light Short Sleeve":
      return 35;
    case "Black Long Sleeve":
    case "Blue Long Sleeve":
    case "Light Long Sleeve":
      return 37;
    case "Sun Hoodie":
      return 46;
    case "Shorts":
      return 33;
    default:
      return null;
  }
}

function ItemCard({ itemName, itemImage, itemProof }) {
  const itemCost = ItemCosts(itemName);
  const dispatch = useDispatch();

  function handleViewItem() {
    dispatch(view(itemName));
    dispatch(setItem(itemProof));
    dispatch(viewPage('item'))
  };

  return (
    <div className='card' onClick={() => {handleViewItem()}}>
      <img src={itemImage} className='item-image'/>
      <div className='item-details'>
        <div className='item-name'>
          { itemName }
        </div>
        <div className='item-cost'>
          { itemName === "Shorts" && "From "}${ itemCost }
        </div>
      </div>
    </div>
  );
}

function Home() {
  const currentPageView = useSelector((state) => state.viewpage.value);

  return (
      currentPageView !== 'submitted' ?
      <div className='page-container'>
        <Header/>
        <main>
          {
            currentPageView === 'home' && 
            <div>
              <div className='manage-banner'>
                Tribe 2023 Jersey Order
              </div>
              <div className='manage-card-holder'>
                <div className='manage-cards'>
                  <ItemCard itemName="Black Short Sleeve" itemImage={BlackPreview} itemProof={BlackShortSleeveProof}/>
                  <ItemCard itemName="Black Long Sleeve" itemImage={BlackPreview} itemProof={BlackLongSleeveProof}/>
                  <ItemCard itemName="Light Short Sleeve" itemImage={LightPreview} itemProof={LightShortSleeveProof}/>
                  <ItemCard itemName="Light Long Sleeve" itemImage={LightPreview} itemProof={LightLongSleeveProof}/>
                  <ItemCard itemName="Blue Short Sleeve" itemImage={BluePreview} itemProof={BlueShortSleeveProof}/>
                  <ItemCard itemName="Blue Long Sleeve" itemImage={BluePreview} itemProof={BlueLongSleeveProof}/>
                  <ItemCard itemName="Shorts" itemImage={ShortsPreview} itemProof={ShortsProof}/>
                  <ItemCard itemName="Sun Hoodie" itemImage={SunHoodiePreview} itemProof={SunHoodieProof}/>
                </div>
              </div>
            </div>
          }
          {
            currentPageView === 'item' &&
            <ViewItem/>
          }
          {
            currentPageView === 'checkout' &&
            <CheckOrder/>
          }
          {
            currentPageView === 'sizing' &&
            <Sizing/>
          }
          {
            currentPageView === 'login' &&
            <Login/>
          }
          {
            currentPageView === 'register' &&
            <Signup/>
          }
        </main>
        <Footer/>
      </div>
      :
      <Thanks/>
  );
}

export default Home;