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
import { viewPage } from './store/viewpageSlice';
import { useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();

  function handleViewItem() {
    dispatch(view(itemName));
    dispatch(setItem(itemProof));
    dispatch(viewPage('item'));
    dispatch(navigate('/view_item'));
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
  const navigate = useNavigate();
  const dispatch = useDispatch();

  if (currentPageView === 'submitted') {
    navigate('/thank_you');
  }

  function handleDonate() {
    dispatch(viewPage('donate'));
    navigate('/donate');
  }

  const textCenter = {
    textAlign: 'center'
  };

  return (
      <div className='page-container'>
        <Header/>
        <main>
          <div className='manage-banner'>
            Tribe 2023 Jersey Order
          </div>
          <div className='item-display'>
            <div className='thank-you'>
              <p style={textCenter}>
                Financial support is incredibly important to help grow Tribe. Don’t want a jersey but still want to support the team? Learn more <a onClick={() => handleDonate()}>here</a>.
              </p>
            </div>
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
        </main>
        <Footer/>
      </div>
  );
}

export default Home;