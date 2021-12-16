import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';

import {
  selectCartItems,
  selectCartTotal,
} from '../../redux/cart/cart.selectors';
import {
  CheckoutHeaderContainer,
  CheckoutPageContainer,
  HeaderBlockContainer,
  TotalContainer,
  WarningContainer,
} from './checkout.styles';

const CheckoutPage = ({ cartItems, total }) => (
  <CheckoutPageContainer className='checkout-page'>
    <CheckoutHeaderContainer className='checkout-header'>
      <HeaderBlockContainer className='header-block'>
        <span>Product</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer className='header-block'>
        <span>Description</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer className='header-block'>
        <span>Quantity</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer className='header-block'>
        <span>Price</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer className='header-block'>
        <span>Remove</span>
      </HeaderBlockContainer>
    </CheckoutHeaderContainer>
    {cartItems.map(cartItem => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}
    <TotalContainer className='total'>TOTAL: ${total}</TotalContainer>
    <WarningContainer className='test-warning'>
      *Please use the following test credit card for payments*
      <br />
      4242 4242 4242 4242 - Exp: MM/YY (date in future) - CVV: 123
    </WarningContainer>
    <StripeCheckoutButton price={total} />
  </CheckoutPageContainer>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
