import React from 'react';
import sizingChart from './Size Chart 2020.jpg';

function Sizing() {
  const fixBorder = {
    borderRadius: '0'
  };

  return (
    <div>
      <br/>
      <div className='not-logged-in'>
        <div className='not-logged-in-content'>
          Note that values are in <b>inches</b>.
        </div>
        <div className='not-logged-in-content'>
          Please be aware that DH sizes are not the same as American sizes, double check the measurements first.
        </div>
        <div className='not-logged-in-content'>
          Please also be aware that the sleeves tend to be a little tight. Ray wears Mens/Unisex size S for all items.
        </div>
      </div>
      <br/>
      <img style={fixBorder} src={sizingChart}></img>
    </div>
  );
}

export default Sizing;