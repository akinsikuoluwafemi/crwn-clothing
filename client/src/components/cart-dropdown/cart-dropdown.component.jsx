import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import './cart-dropdown.styles.scss';
import CartItem from '../cart-item/cart-item.component';
import { useHistory} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions';


 function Cartdropdown() {
    
    const dispatch = useDispatch();
    const history = useHistory();
     const currentUser = useSelector(state => state.user.currentUser)
     const cartItems = useSelector(state => state.cart.cartItems);
     
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

 



export default Cartdropdown;