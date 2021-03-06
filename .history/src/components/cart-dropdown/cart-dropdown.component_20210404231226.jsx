import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import './cart-dropdown.styles.scss';
import CartItem from '../cart-item/cart-item.component';
import { connect } from 'react-redux';



 function Cartdropdown({cartItems}) {
    return (
        <div className="cart-dropdown">
            <div className="cart-items" />
            {
                cartItems.map(cartItem => <CartItem key={cat} item={cartItem}/>)
            }
            <CustomButton>GO TO CHECKOUT</CustomButton>
        </div>
    )
 }

 const mapStateToProps = ({cart: {cartItems}}) => {
     return {
         cartItems
     }
 }

export default connect(mapStateToProps)(Cartdropdown);