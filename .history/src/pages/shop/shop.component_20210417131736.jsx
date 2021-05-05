import React, { Component } from 'react';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';

 class ShopPage extends Component {
 

    state = {

    render() {
        const {collections} = this.state;
        return (
            <div className="shop-page">
                {
                  collections.map(({id, ...otherCollectionProps}) => (
                      <CollectionPreview key={id} {...otherCollectionProps}/>
                  ))
                }
            </div>
        )
    }
}

export default ShopPage
