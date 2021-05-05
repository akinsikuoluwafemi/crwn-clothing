import React from 'react';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import { Route } from 'react-router-dom';
import CategoryPage from '../category/category.component';



 function ShopPage ({match}) {
    // console.log(match.path)
     
        return (
            // <div className="shop-page">
            //     <Route exact path={`${match.path}`} component={<CollectionsOverview />} />
            //     <Route path={`${match.path}/:categoryId`}  component={CategoryPage} />
            // </div>
              <div className="shop-page">
                <Route exact path={`${match.path}`} component={<CollectionsOverview />} />
                <Route path={`${match.path}/:categoryId`}  component={CategoryPage} />
            </div>
        )
 }



export default ShopPage;
