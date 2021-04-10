import React from 'react';
import './checkout-item.styles.scss';
import { connect } from 'react-redux';
import { clearItemFromCart } from '../../redux/cart/cart.actions';



const CheckoutItem = ({ cartItem , clearItemFromCart }) => {
    const { imageUrl, name, quantity, price} = cartItem;
    return (
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt="item" />
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div className="arrow">&</div>
                {quantity}
                <div className="arrow"></div>
            </span>
            <span className="price">{ price}</span>
            <div onClick={() => clearItemFromCart(cartItem)} className="remove-button">&#10005;</div>

        </div>

    )
}

export default connect(null, {clearItemFromCart})(CheckoutItem);