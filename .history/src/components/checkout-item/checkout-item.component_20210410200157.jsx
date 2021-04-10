import React from 'react';
import './checkout-item.styles.scss';
import { connect } from 'react-redux';
import { clearItemFromCart, addItem, removeItem } from '../../redux/cart/cart.actions';



const CheckoutItem = ({ cartItem , clearItemFromCart }) => {
    const { imageUrl, name, quantity, price} = cartItem;
    return (
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt="item" />
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div className="arrow">&#10094;</div>
                <span className="value">{ quantity}</span>
                <div className="arrow">&#10095;</div>

            </span>
            <span className="price">{ price}</span>
            <div onClick={() => clearItemFromCart(cartItem)} className="remove-button">&#10005;</div>

        </div>

    )
}

const mapDispatchToProps = dispatch => ({
    
})

export default connect(null, {clearItemFromCart})(CheckoutItem);