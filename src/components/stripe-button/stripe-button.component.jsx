import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStipe = price * 100; // convert to cents
  const publishableKey =
    'pk_test_51HSQGxBL8OwPHATX9V0yUEqrEVGqY6Kg8MUteQh2hO0Gcc96nZXiGgtcvtUGnoRfXSN4gv5Oztp6U0nUYckj2FMa00bgZNl7X0';

  const onToken = token => {
    console.log('token is', token);
    alert('Payment Successful');
  };

  return (
    <StripeCheckout
      name='CRWN Clothing Ltd.'
      description={`Your total is $${price}`}
      image='https://svgshare.com/i/CUz.svg'
      label='Pay Now'
      amount={priceForStipe}
      stripeKey={publishableKey}
      shippingAddress
      billingAddress
      token={onToken}
    />
  );
};

export default StripeCheckoutButton;
