//DROPDOWN SHOPPING CART
import React from 'react';
import { connect } from 'react-redux';

import {
  CartItemContainer,
  ItemDetailsContainer,
  CartItemImage
} from './cart-item.styles';

import {
  RemoveButtonContainer
} from '../checkout-item/checkout-item.styles';


import {
  clearItemFromCart
  } from '../../redux/cart/cart.actions';

const CartItem = ({ item: { imageUrl, price, name, quantity,  } }) => (
  <CartItemContainer>
    <CartItemImage src={imageUrl} alt='item' />
    <ItemDetailsContainer>
      <span>{name}</span>
      <span>
        {quantity} x ${price}
      </span>
      {/* <RemoveButtonContainer onClick={() => clearItem(cartItem)}>
        &#10005;
      </RemoveButtonContainer> */}
    </ItemDetailsContainer>
  </CartItemContainer>
);

// export default CartItem;
const mapDispatchToProps = dispatch => ({
  clearItem: item => dispatch(clearItemFromCart(item)),
});

export default connect(
  null,
  mapDispatchToProps
)(CartItem);