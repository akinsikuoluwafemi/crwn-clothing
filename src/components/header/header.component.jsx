import React from 'react';
import {ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { HeaderContainer, LogoContainer, OptionDiv, OptionLink, OptionsContainer} from './header.styles';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import {selectCurrentUser } from '../../redux/user/user.selectors';



const Header = ({currentUser, hidden}) => (
    <HeaderContainer className="header">
        <LogoContainer to="/">
            <Logo className="logo"/>
         </LogoContainer>
         <OptionsContainer >
            <OptionLink  to="/shop">
                SHOP
            </OptionLink>
            <OptionLink  to="/contact">
                CONTACT
            </OptionLink>

            {
                currentUser ? <OptionDiv  onClick={() => auth.signOut()}>SIGN OUT</OptionDiv> : <OptionLink  to="/signin">SIGN IN</OptionLink>
            }

            <CartIcon/>
        </OptionsContainer>
        {hidden ? null
            : (
        <CartDropdown/>
                
         )}
    
    </HeaderContainer>
)

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden

});



export default connect(mapStateToProps, {})(Header);