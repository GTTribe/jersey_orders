import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from './store/cartSlice';

class ItemOrderForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item_type: props.item_type,
      item_subtype: '',
      item_size: '',
      item_quantity: 1,
      item_custom_name: '',
      item_custom_number: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const name = event.target.name;
    var value = event.target.value;

    this.setState({
      [name]: value
    });
  }

  async handleSubmit(event) {
    event.preventDefault();

    console.log("Adding to order!");

    // const dispatch = useDispatch();
    // const order = {
    //   item_type: this.state.item_type,
    //   item_subtype: this.state.item_subtype,
    //   item_size: this.state.item_size,
    //   item_quantity: this.state.item_quantity,
    //   item_custom_name: this.state.item_custom_name,
    //   item_custom_number: this.state.item_custom_number
    // }
    // dispatch(addToCart(order));

    // Reset
    await this.setState({
      item_subtype: '',
      item_size: '',
      item_quantity: 1,
      item_custom_name: '',
      item_custom_number: ''
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {
          this.state.item_type === 'Shorts' &&
          <div className='bottom-border-box'>
            <h2>Pocket Options:</h2>
            <p><input name='item_subtype' type='radio' value='pockets' checked={this.state.item_subtype === 'pockets'} onChange={this.handleChange} required/>$33 without pockets</p>
            <p><input name='item_subtype' type='radio' value='no_pockets' checked={this.state.item_subtype === 'no_pockets'} onChange={this.handleChange}/>$35 with pockets</p>
          </div>
        }
        <div className='bottom-border-box'>
          <h2>Customizations:</h2>
          <p className='small-text'>*Please type it exactly how you want it to look</p>
          { this.state.item_type !== 'Shorts' &&
            <p>Custom Name: <input name='item_custom_name' type='text' value={this.state.item_custom_name} onChange={this.handleChange} placeholder='Optional'/></p>
          }
          <p>Custom Number: <input name='item_custom_number' type='text' value={this.state.item_custom_number} onChange={this.handleChange} placeholder='Optional'/></p>
        </div>
        <div className='bottom-border-box'>
          <h2>Sizing:</h2>
          {
            this.state.item_type === 'Shorts' &&
            <p><select name='item_size' onChange={this.handleChange} required>
              <option value='Unisex XS'>Unisex XS</option>
              <option value='Unisex S'>Unisex S</option>
              <option value='Unisex M'>Unisex M</option>
              <option value='Unisex L'>Unisex L</option>
              <option value='Unisex XL'>Unisex XL</option>
              <option value='Unisex XXL'>Unisex XXL</option>
              <option value='Womens XS'>Women's XS</option>
              <option value='Womens S'>Women's S</option>
              <option value='Womens M'>Women's M</option>
              <option value='Womens L'>Women's L</option>
              <option value='Womens XL'>Women's XL</option>
              <option value='Womens XXL'>Women's XXL</option>
            </select></p>
          }
          {
            this.state.item_type !== 'Shorts' &&
            <p><select name='item_size' onChange={this.handleChange} required>
              <option value='Mens XS'>Men's XS</option>
              <option value='Mens S'>Men's S</option>
              <option value='Mens M'>Men's M</option>
              <option value='Mens L'>Men's L</option>
              <option value='Mens XL'>Men's XL</option>
              <option value='Mens XXL'>Men's XXL</option>
              <option value='Womens XS'>Women's XS</option>
              <option value='Womens S'>Women's S</option>
              <option value='Womens M'>Women's M</option>
              <option value='Womens L'>Women's L</option>
              <option value='Womens XL'>Women's XL</option>
              <option value='Womens XXL'>Women's XXL</option>
            </select></p>
          }
        </div>
        <div>
          <h2>Quantity:</h2>
          <p>Qty: <input name='item_quantity' type='number' min='1' value={this.state.item_quantity} onChange={this.handleChange} required/></p>
        </div>
        <br/>
        <div>
          <input type='submit' value='Add to Cart'/>
        </div>
      </form>
    );
  }
}

export default ItemOrderForm;