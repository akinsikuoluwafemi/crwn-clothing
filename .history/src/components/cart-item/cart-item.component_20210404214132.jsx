import React from 'react';
import './cart-item.styles.scss';

const CartItem = ({item: {imageUrl, price, name}}) => {
    return (
        <div className="cart-item">
            <img src={imageUrl} alt="item" />
            <div className="item-details">

            </div>
        </div>
    )
}