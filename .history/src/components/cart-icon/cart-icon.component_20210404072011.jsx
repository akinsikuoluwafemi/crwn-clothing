import React from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import './cart-icon.styles.scss';
import { connect } from 'react-redux';
import { toggleCartHidden} from '../../redux/cart/cart.actions';



const CartIcon = () => (
    <div onClick={toggleCartHidden} className="cart-icon">
        <ShoppingIcon className="shopping-icon" />
        <span className="item-count">0</span>
    </div>
)

const mapDispatchToProps  = (dispatch) => {
    return {
        toggleCartHidden: () => dispatch(toggleCartHidden)
    }
}


export default connect(null, mp )(CartIcon);