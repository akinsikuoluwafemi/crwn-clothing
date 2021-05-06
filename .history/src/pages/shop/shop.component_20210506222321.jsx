import React from 'react';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import { Route } from 'react-router-dom';
import CollectionPage from '../collection/collection.component';



 function ShopPage () {
     
        return (
            
              <div className="shop-page">
                <CollectionsOverview />
            </div>
        )
 }



export default ShopPage;
