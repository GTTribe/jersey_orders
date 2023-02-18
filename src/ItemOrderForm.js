import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from './store/cartSlice';
import { getItemID, getItemSizeId } from './store/OrderObject';
import { viewPage } from './store/viewpageSlice';

class ItemOrderForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item_type: props.item_type,
      item_subtype: '',
      item_size: 'Womens XS',
      item_quantity: 1,
      item_custom_name: '',
      item_custom_number: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSizing = this.handleSizing.bind(this);
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

    const key = getItemID(this.state.item_type, this.state.item_subtype) + '+' + getItemSizeId(this.state.item_size);

    const value = {
      item_type: this.state.item_type,
      item_subtype: this.state.item_subtype,
      item_size: this.state.item_size,
      item_quantity: parseInt(this.state.item_quantity),
      item_custom_name: this.state.item_custom_name,
      item_custom_number: this.state.item_custom_number
    }

    const payload = [key, value]

    this.props.addToCart(payload);

    // Reset
    await this.setState({
      item_subtype: '',
      item_size: 'Womens XS',
      item_quantity: 1,
      item_custom_name: '',
      item_custom_number: ''
    });
  }

  handleSizing() {
    // this.props.viewPage('sizing');
    this.props.handle_sizing();
  }

  render() {
    const pointer = {
      cursor: 'pointer'
    }

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
          <div>
            <h2><span title='Size Chart' style={pointer} onClick={() => this.handleSizing()}>
              <svg xlmns="http://www.w3.org/2000/svg" title='Size Chart' width="16" height="16" fill="currentColor" viewBox="0 96 960 960">
                <path d="M478 816q21 0 35.5-14.5T528 766q0-21-14.5-35.5T478 716q-21 0-35.5 14.5T428 766q0 21 14.5 35.5T478 816Zm-36-154h74q0-33 7.5-52t42.5-52q26-26 41-49.5t15-56.5q0-56-41-86t-97-30q-57 0-92.5 30T342 438l66 26q5-18 22.5-39t53.5-21q32 0 48 17.5t16 38.5q0 20-12 37.5T506 530q-44 39-54 59t-10 73Zm38 314q-83 0-156-31.5T197 859q-54-54-85.5-127T80 576q0-83 31.5-156T197 293q54-54 127-85.5T480 176q83 0 156 31.5T763 293q54 54 85.5 127T880 576q0 83-31.5 156T763 859q-54 54-127 85.5T480 976Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"></path>
              </svg>
            </span>
            Sizing:</h2>
          </div>
          {
            this.state.item_type === 'Shorts' &&
            <p><select name='item_size' value={this.state.item_size} onChange={this.handleChange} required>
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
            <p><select name='item_size' value={this.state.item_size} onChange={this.handleChange} required>
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

export default connect(null, { addToCart })(ItemOrderForm);