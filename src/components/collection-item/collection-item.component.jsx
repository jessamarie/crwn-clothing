import React from 'react';

import './collection-item.styles.scss';

const styles = (imageUrl) => {
    return {
        backgroundImage: `url(${imageUrl})`
    }
}

const CollectionItem = ({ id, name, price, imageUrl }) => (
    <div className='collection-item'>
        <div className='image' style={styles(imageUrl)}></div>
        <div className='collection-footer'>
            <span className='name'>{name}</span>
            <span className='price'>{price}</span>
        </div>
    </div>
);

export default CollectionItem;