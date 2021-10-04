import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import './cart-dropdown.styles.scss';
import CartItem from '../cart-item/cart-item.component';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { withRouter } from 'react-router-dom';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import {selectCurrentUser } from '../../redux/user/user.selectors';


 function Cartdropdown({cartItems, history, dispatch,currentUser,  ...otherProps}) {
     console.log(currentUser)
     
     
     return (
        <div className="cart-dropdown">
            <div className="cart-items" />
            {
                cartItems.length ? 
                cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem}/> ) : (<span className="empty-message">Yor cart is empty</span>)
            }

            {currentUser ? (
                <CustomButton onClick={() => {
                    history.push('/checkout')
                    //  toggleCartHidden()
                    dispatch(toggleCartHidden())
                    
                }}>GO TO CHECKOUT
                </CustomButton>
            ) : (
                <CustomButton onClick={() => {
                    history.push('/signin')
                    dispatch(toggleCartHidden())
                    
                }}>Kindly Sign In
                </CustomButton>
            )}

            


        </div>
    )
 }

 const mapStateToProps = createStructuredSelector({
        cartItems: selectCartItems,
        currentUser: selectCurrentUser
 })



export default withRouter(connect(mapStateToProps)(Cartdropdown));