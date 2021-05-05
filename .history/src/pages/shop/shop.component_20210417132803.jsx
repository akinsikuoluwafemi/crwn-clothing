import React from 'react';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';
import selectShopItems from '../../redux/shop/'


 const ShopPage = ({collections}) => {

     
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

export default ShopPage
