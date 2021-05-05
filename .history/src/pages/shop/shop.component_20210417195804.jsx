import React from 'react';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import { Route } from 'react-router-dom';


 const ShopPage = (props) => {
    console.log(props.match.path)
     
        return (
            <div className="shop-page">
            <Route  exact path <CollectionsOverview/> />
            </div>
        )
 }


export default ShopPage;
