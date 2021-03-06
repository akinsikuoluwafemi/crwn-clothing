import React from 'react';
import './collection-item.styles.scss';
import CustomButton from '../custom-button/custom-button.component';
import { connect } from 'react-redux';
import {addItem } from '../../redux/cart/cart.actions';


const CollectionItem = ({id, name, price, imageUrl}) => {
    return (
        <div className="collection-item">
            <div className="image" style={{backgroundImage: `url(${imageUrl})`}}/>
            <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="price">${price}</span>

            </div>
            <CustomButton inverted>Add to cart</CustomButton>
            
        </div>
    )

}

const mapDispatchToProps = (dispatch) => {
    return {
        addItem: () => dispatch(addItem())
    }
}



export default connect()(CollectionItem);