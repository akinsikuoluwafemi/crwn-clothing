import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import './cart-dropdown.styles.scss';
import CartItem from '../cart-item/'


export default function Cartdropdown() {
    return (
        <div className="cart-dropdown">
            <div className="cart-items" />
            <CustomButton>GO TO CHECKOUT</CustomButton>
        </div>
    )
}
