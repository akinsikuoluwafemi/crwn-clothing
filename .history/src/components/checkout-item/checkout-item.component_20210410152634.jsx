import React from 'react';
import './checkout-item.styles.scss';


const CheckoutItem = () => {
    return(
        <div className="checkout-item">
            <div className="image-container">
                <img alt="item" />
            </div>
            <span className="name"></span>
            <span className="quantity"></span>
            <span className="price"></span>
            <div className="remove-button">&#100</div>

        </div>

    )
}