import React from 'react';

function ItemCosts({ itemName }) {
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

export default ItemCosts;