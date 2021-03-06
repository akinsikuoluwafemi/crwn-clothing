import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import './cart-dropdown.styles.scss';
import CartItem from '../cart-item/cart-item.component';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { withRouter } from 'react-router-dom';
import { toggleCartHidden } from '../../redux/cart/cart.actions';



 function Cartdropdown({cartItems, history, dispatch,  ...otherProps}) {
     console.log(otherProps)
     
     const goToCheckout = () => {
         history.push('/checkout')
        //  toggleCartHidden()
         dispatch(toggleCartHidden())
         
     }
     
     return (
        <div className="cart-dropdown">
            <div className="cart-items" />
            {
                cartItems.length ? 
                cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem}/> ) : (<span className="empty-message">Yor cart is empty</span>)
            }
            <CustomButton onClick={goToCheckout}>GO TO CHECKOUT</CustomButton>
        </div>
    )
 }

 const mapStateToProps = createStructuredSelector({
        cartItems: selectCartItems
 })



export default withRouter(connect(mapStateToProps)(Cartdropdown));