export function OrderObject(item_type, item_subtype, item_size, item_custom_name, item_custom_number) {
  this.item_type = item_type;
  this.item_subtype = item_subtype;
  this.item_size = item_size;
  this.item_custom_name = item_custom_name;
  this.item_custom_number = item_custom_number;
}

const itemTable = {
  'shorts_with_pockets': 'Shorts',
  'shorts_no_pockets': 'Shorts',
  'black_short_sleeve': 'Black Short Sleeve',
  'black_long_sleeve':'Black Long Sleeve',
  'light_short_sleeve': 'Light Short Sleeve',
  'light_long_sleeve': 'Light Long Sleeve',
  'blue_short_sleeve': 'Blue Short Sleeve',
  'blue_long_sleeve': 'Blue Long Sleeve',
  'sun_hoodie': 'Sun Hoodie'
}

function getKeyByValue(object, value) {
  return Object.keys(object).find(key => object[key] === value);
}

export function getItemID(item_type, item_subtype) {
  if (item_type === 'Shorts') {
    if (item_subtype === 'pockets') {
      return 'shorts_with_pockets';
    } else {
      return 'shorts_no_pockets';
    }
  }

  // const itemTable = {
  //   'Black Short Sleeve': 'black_short_sleeve',
  //   'Black Long Sleeve': 'black_long_sleeve',
  //   'Light Short Sleeve': 'light_short_sleeve',
  //   'Light Long Sleeve': 'light_long_sleeve',
  //   'Blue Short Sleeve': 'blue_short_sleeve',
  //   'Blue Long Sleeve': 'blue_long_sleeve',
  //   'Sun Hoodie': 'sun_hoodie'
  // }

  return getKeyByValue(itemTable, item_type);
}

export function getItemName(item_id) {
  return itemTable[item_id];
}

const sizeTable = [
  'Unisex XS',
  'Unisex S',
  'Unisex M',
  'Unisex L',
  'Unisex XL',
  'Unisex XXL',
  'Mens XS',
  'Mens S',
  'Mens M',
  'Mens L',
  'Mens XL',
  'Mens XXL',
  'Womens XS',
  'Womens S',
  'Womens M',
  'Womens L',
  'Womens XL',
  'Womens XXL'
]

export function getItemSizeId(item_size) {
  console.log(item_size)
  return sizeTable.indexOf(item_size);
}

export function getItemSizeName(item_size_id) {
  return sizeTable[item_size_id];
}

const costTable = {
  'shorts_with_pockets': 35,
  'shorts_no_pockets': 33,
  'black_short_sleeve': 35,
  'black_long_sleeve': 37,
  'light_short_sleeve': 35,
  'light_long_sleeve': 37,
  'blue_short_sleeve': 35,
  'blue_long_sleeve': 37,
  'sun_hoodie': 46
}

export function getItemCost(item_type, item_subtype) {
  const item_id = getItemID(item_type, item_subtype);
  return costTable[item_id];
}

export function capFirst(name) {
  const firstLetter = name.charAt(0);
  const capFirstLetter = firstLetter.toUpperCase();
  return capFirstLetter + name.substring(1);
}