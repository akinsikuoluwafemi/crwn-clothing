import React from 'react';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import { Route } from 'react-router-dom';


 const ShopPage = ({match}) => {
    console.log(props.match.path)
     
        return (
            <div className="shop-page">
                <Route exact path={`${match.path}`} component={<CollectionsOverview />} />
            </div>
        )
 }


export default ShopPage;
