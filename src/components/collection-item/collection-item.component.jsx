import React from 'react';
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';
import CustomButton from '../custom-button/custom-button.component';

import './collection-item.styles.scss';

const styles = imageUrl => {
  return {
    backgroundImage: `url(${imageUrl})`,
  };
};

const CollectionItem = ({ item, addItem }) => {
  const { id, imageUrl, name, price } = item;
  return (
    <div className='collection-item'>
      <div className='image' style={styles(imageUrl)}></div>
      <div className='collection-footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <CustomButton onClick={() => addItem(item)} inverted>
        Add to Cart
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
