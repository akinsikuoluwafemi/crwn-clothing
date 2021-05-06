import React from 'react';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';
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
