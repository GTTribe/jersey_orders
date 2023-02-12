import React from 'react';
import sizingChart from './Size Chart 2020.jpg';

function Sizing() {
  const fixBorder = {
    borderRadius: '0'
  };

  return (
    <div>
      <img style={fixBorder} src={sizingChart}></img>
    </div>
  );
}

export default Sizing;